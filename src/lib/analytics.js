/**
 * UNICO punto del codigo que llama a gtag.
 *
 * POR QUE EXISTE. GA4 esta instalado en index.html (G-18BH33XVSP) y hasta ahora
 * el sitio no emitia un solo evento propio: se sabia cuanta gente entraba y nada
 * de cuanta convertia. Las llamadas a gtag quedan concentradas aca para que:
 *
 *   · se verifique SIEMPRE que window.gtag existe antes de llamarlo. Un adblock,
 *     una extension de privacidad o un consent manager pueden no cargar gtag.js,
 *     y en ese caso emitir un evento es un TypeError que rompe el render.
 *   · nunca se propague una excepcion desde la medicion hacia la pagina. Medir es
 *     secundario; que el sitio funcione, no.
 *   · content_id se adjunte solo, sin que cada componente se acuerde.
 *
 * REGLA: ningun componente llama a window.gtag directamente. Si aparece un
 * gtag suelto en un componente, este modulo dejo de ser la fuente unica y la
 * garantia de "no romper el render" se pierde en ese punto.
 */

/**
 * content_id identifica QUE publicacion trajo la visita. Los utm_* los lee GA4
 * solo; este no, es un parametro propio del proyecto.
 *
 * Se guarda en sessionStorage —no en localStorage— porque atribuye UNA sesion:
 * la persona que vuelve una semana despues por Google no vino de esa publicacion.
 */
const CONTENT_ID_KEY = "credex_content_id";
const CONTENT_ID_PARAM = "content_id";

/** Tope defensivo: lo que viene en la URL lo escribe cualquiera. */
const CONTENT_ID_MAX = 100;

function limpiarContentId(valor) {
  if (typeof valor !== "string") return null;

  const limpio = valor.trim().slice(0, CONTENT_ID_MAX);
  return limpio || null;
}

/**
 * Captura content_id de la URL DE ENTRADA y lo deja guardado por el resto de la
 * sesion. Se llama una vez desde main.jsx, antes de renderizar: en ese momento
 * location.search todavia es la URL con la que la persona llego.
 *
 * Si no viene content_id no se toca lo guardado: una navegacion interna no puede
 * borrar la atribucion de la entrada.
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;

  try {
    const entrante = limpiarContentId(
      new URLSearchParams(window.location.search).get(CONTENT_ID_PARAM),
    );

    if (entrante) sessionStorage.setItem(CONTENT_ID_KEY, entrante);
  } catch {
    // sessionStorage bloqueado (modo privado, cookies de terceros): se sigue sin
    // atribucion de publicacion. Los eventos se emiten igual, sin content_id.
  }
}

export function getContentId() {
  if (typeof window === "undefined") return null;

  try {
    return limpiarContentId(sessionStorage.getItem(CONTENT_ID_KEY));
  } catch {
    return null;
  }
}

/** Descarta null, undefined y cadenas vacias: GA4 no necesita parametros huecos. */
function soloValores(params) {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([, valor]) => valor !== null && valor !== undefined && valor !== "",
    ),
  );
}

/**
 * DEPENDENCIA DE FALLO SILENCIOSO — LEER ANTES DE TOCAR NADA DE ESTO.
 *
 * El launcher de Clientify REDEFINE window.gtag con una version propia. Verificado
 * en produccion en www.credex.cl el 2026-09-01, con el launcher ya cargado:
 *
 *     window.gtag                 function gtag(){dataLayer.push(arguments);}
 *     claves dataLayer en window  ["dataLayer"]        <- una sola
 *     config en dataLayer         ["config", "G-18BH33XVSP"]
 *
 * O sea: la redefinicion empuja al MISMO dataLayer que index.html ya configuro
 * con nuestro measurement id. Los eventos de este modulo llegan a nuestra
 * propiedad de GA4 igual, y por eso no hay nada que arreglar hoy.
 *
 * EL RIESGO. Si Clientify algun dia empuja a OTRO dataLayer, los eventos
 * desaparecen sin ningun error visible y trackEvent SEGUIRIA DEVOLVIENDO TRUE:
 * solo comprueba que gtag EXISTA, no a donde va lo que empuja. Nada en la pagina
 * ni en la consola avisaria.
 *
 * SEÑAL DE ALARMA. Si generate_lead o chat_open_aprox caen a cero de un dia para
 * otro, lo PRIMERO que hay que revisar es si gtag sigue empujando al mismo
 * dataLayer, con las tres comprobaciones de arriba.
 */

/**
 * Emite un evento a GA4. Devuelve true solo si el evento SALIO, para que quien
 * llama pueda distinguir "no se midio" de "se midio". No lanza nunca.
 */
export function trackEvent(name, params = {}) {
  try {
    if (typeof window === "undefined") return false;
    if (typeof window.gtag !== "function") return false;

    const contentId = getContentId();

    window.gtag("event", name, {
      ...soloValores(params),
      ...(contentId ? { content_id: contentId } : {}),
    });

    return true;
  } catch {
    // Medir nunca puede romper la pagina.
    return false;
  }
}
