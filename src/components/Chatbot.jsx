import { useEffect } from "react";

import { trackEvent } from "../lib/analytics";

const CLIENTIFY_BOT_ID = "236020";
const CLIENTIFY_USER_ID = "107027";

/**
 * MEDICION DEL CHAT — ES UNA APROXIMACION, Y POR ESO SE LLAMA ASI.
 *
 * QUE SE INVESTIGO (launcher.js de Clientify, 2026-09-01, 2,9 MB minificado):
 *
 *   · API JS o callbacks: NO EXISTEN. Los unicos globales que el launcher lee
 *     son Clientify_botId y Clientify_botUserId. No publica ningun objeto con
 *     metodos ni acepta suscriptores.
 *   · postMessage: NO SIRVE. Hay 12 apariciones y las 12 son del polyfill de
 *     setImmediate. El chat no le habla a la pagina que lo hospeda.
 *   · Eventos propios a GA4: EXISTEN, pero no se pueden usar. El launcher emite
 *     gtag("event", "clientify-chatbot-open", ...) SOLO si en la configuracion
 *     del chatbot en Clientify esta cargado un google_analytics_id. Y ese mismo
 *     bloque hace ademas gtag("config", <id>) y gtag("send","pageview"): llenar
 *     ese campo volveria a contar cada visita dos veces, que es exactamente lo
 *     que se corrigio al instalar GA4 en index.html. Ese campo se queda vacio.
 *   · DOM observable: SI. El launcher refleja el estado de la ventana del chat
 *     en las clases de #chatbotiframe: al abrirse agrega "botwindow-iframe" y
 *     quita "clientify-window"; al cerrarse hace lo inverso.
 *
 * QUE SE IMPLEMENTA: lo ultimo, que es lo unico que hay. Un MutationObserver
 * sobre la clase de #chatbotiframe.
 *
 * QUE MIDE: que la ventana del chat se abrio en esta carga de pagina.
 *
 * QUE NO MIDE, y por eso el evento se llama chat_open_aprox y no chat_open:
 *   1. NO distingue quien la abrio. La misma clase aparece cuando la persona
 *      hace clic en el launcher y cuando el bot se autoabre solo por el
 *      automensaje configurado en Clientify. El propio launcher confunde los dos
 *      casos en su evento: llama "clientify-chatbot-open" a ambos.
 *   2. NO mide conversaciones ni mensajes enviados, solo aperturas.
 *   3. Depende de una clase CSS INTERNA de un bundle de terceros. Clientify
 *      puede renombrarla en cualquier despliegue, sin avisar, y el evento
 *      dejaria de emitirse en silencio. Si chat_open_aprox cae a cero de un dia
 *      para otro, lo primero que hay que revisar es si esta clase sigue viva.
 *
 * Un numero que parece exacto y no lo es hace mas dano que no tener numero: el
 * nombre del evento lleva la advertencia encima para que nadie lo lea en un
 * informe de GA4 creyendo que son personas que decidieron escribir.
 */
const CHAT_FRAME_ID = "chatbotiframe";
const CLASE_VENTANA_ABIERTA = "botwindow-iframe";

/** Una apertura por carga de pagina. Reabrir el chat no vuelve a contar. */
const YA_EMITIDO = "__credexChatAperturaEmitida";

function emitirApertura() {
  if (window[YA_EMITIDO]) return false;
  window[YA_EMITIDO] = true;

  trackEvent("chat_open_aprox", {
    provider: "clientify",
    // Viaja en el evento, no solo en este comentario: quien mire el parametro en
    // GA4 tiene que enterarse de como se detecto y de que incluye autoaperturas.
    detection: "dom_class_observer",
  });

  return true;
}

export default function Chatbot() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Evita reinicializar Clientify si el componente se monta más de una vez.
    if (window.__credexClientifyLoaded) return;
    window.__credexClientifyLoaded = true;

    // Marca local para controlar visitas y evitar comportamiento insistente.
    const storageKey = "credex_clientify_chat_loaded_at";

    try {
      if (!localStorage.getItem(storageKey)) {
        localStorage.setItem(storageKey, new Date().toISOString());
      }
    } catch (error) {
      // Si el navegador bloquea localStorage, el chatbot igual debe cargar.
      console.warn("Clientify localStorage no disponible:", error);
    }

    // Configuración requerida por Clientify.
    window.Clientify_botId = CLIENTIFY_BOT_ID;
    window.Clientify_botUserId = CLIENTIFY_USER_ID;

    // Evita duplicar el nodo raíz del chatbot.
    if (!document.querySelector("chatbot-root")) {
      const root = document.createElement("chatbot-root");
      document.body.appendChild(root);
    }

    // Evita duplicar el launcher.
    if (!document.getElementById("clientify-chatbot-launcher")) {
      const launcher = document.createElement("script");
      launcher.id = "clientify-chatbot-launcher";
      launcher.src = "https://api.clientify.net/static/js/chatbot/launcher/launcher.js";
      launcher.async = true;

      document.head.appendChild(launcher);
    }
  }, []);

  /**
   * Observador de la apertura del chat. Va en su propio efecto para no quedar
   * detras del guard de carga del launcher de arriba: la inyeccion ocurre una
   * sola vez por pestaña, pero el observador tiene que existir cada vez que este
   * componente se monta.
   *
   * LIMITE CONOCIDO: este componente vive en App.jsx, o sea en las rutas de
   * mercado. Si alguien navega desde la home al blog y abre el chat ahi, el
   * launcher sigue en pie pero el observador ya no, y esa apertura no se cuenta.
   */
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return undefined;
    if (window[YA_EMITIDO]) return undefined;

    let observadorClase = null;
    const observadorAparicion = new MutationObserver(buscarMarco);

    function revisarClase(marco) {
      if (!marco.classList.contains(CLASE_VENTANA_ABIERTA)) return;

      emitirApertura();
      detener();
    }

    function buscarMarco() {
      const marco = document.getElementById(CHAT_FRAME_ID);
      if (!marco || observadorClase) return;

      // El marco ya existe: deja de mirar el body entero y pasa a mirar solo su
      // atributo class.
      observadorAparicion.disconnect();

      observadorClase = new MutationObserver(() => revisarClase(marco));
      observadorClase.observe(marco, { attributes: true, attributeFilter: ["class"] });

      // Puede haberse autoabierto antes de que llegaramos a observarlo.
      revisarClase(marco);
    }

    function detener() {
      observadorAparicion.disconnect();
      observadorClase?.disconnect();
      observadorClase = null;
    }

    try {
      // El launcher inyecta #chatbotiframe de forma asincrona, despues de
      // descargar su bundle y consultar su API: al montar todavia no existe.
      buscarMarco();

      if (!observadorClase) {
        observadorAparicion.observe(document.body, { childList: true, subtree: true });
      }
    } catch {
      // Medir la apertura del chat no puede impedir que el chat funcione.
      detener();
    }

    return detener;
  }, []);

  return null;
}
