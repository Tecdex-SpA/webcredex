/**
 * UNICA fuente de verdad del consentimiento de cookies y servicios de terceros.
 *
 * POR QUE EXISTE. Hasta noviembre de 2026 el sitio cargaba GA4 y el chat de
 * Clientify a todo visitante, sin preguntar. Desde este modulo, nada que no sea
 * estrictamente necesario se carga antes de que la persona lo acepte.
 *
 * CATEGORIAS. Las necesarias (el propio registro de esta decision, el mercado
 * elegido a mano en el selector y el cierre del aviso geografico) no se
 * preguntan. Las otras dos se deciden por separado:
 *   · analytics: Google Analytics 4 y la atribucion content_id.
 *   · chat:      el launcher del chat de Clientify.
 *
 * El formulario de contacto (iframe de Clientify) NO pasa por aca: es el canal
 * que la persona usa para pedir contacto y su propia casilla de autorizacion
 * vive en Clientify. Si el juridico decide que tambien debe esperar el
 * consentimiento, el lugar para hacerlo es MarketFormCard/ClientifyForm.
 *
 * MODO BASICO DE CONSENT MODE. index.html declara todo en "denied" y NO carga
 * gtag.js ni empuja el config de GA4 hasta que analytics este aceptado. Con el
 * modo avanzado gtag.js cargaria siempre y mandaria pings sin cookies; esa
 * opcion la decide el juridico, no el codigo.
 */

/**
 * Subir la version vuelve a preguntar a todo el mundo. Hay que subirla cuando
 * cambien las categorias o los servicios que cubre cada una: un consentimiento
 * dado para otra cosa no vale para la nueva.
 */
export const CONSENT_VERSION = 1;

/** El mismo nombre lo lee el script de index.html. Si cambia aca, cambia alla. */
export const CONSENT_KEY = "credex_consent";

/** Evento de ventana que avisa a quien escuche que la decision cambio. */
export const CONSENT_EVENT = "credex:consent";

/** Evento que reabre el panel de preferencias (footer, pagina de privacidad). */
export const OPEN_PREFERENCES_EVENT = "credex:abrir-preferencias";

const DENEGADO = { analytics: false, chat: false };

/** Respaldo para cuando localStorage esta bloqueado: vale solo esta carga. */
let enMemoria = null;

function normalizar(guardado) {
  if (!guardado || guardado.v !== CONSENT_VERSION) return null;

  return {
    analytics: guardado.analytics === true,
    chat: guardado.chat === true,
  };
}

/**
 * Decision guardada, o null si la persona todavia no decidio (o decidio sobre
 * una version anterior). null y "rechazo todo" se tratan igual para cargar
 * servicios; solo se distinguen para saber si mostrar el aviso.
 */
export function getConsent() {
  if (typeof window === "undefined") return null;

  try {
    return normalizar(JSON.parse(localStorage.getItem(CONSENT_KEY))) || enMemoria;
  } catch {
    return enMemoria;
  }
}

export function hasConsent(categoria) {
  return getConsent()?.[categoria] === true;
}

/**
 * Activa GA4 en la pagina actual. Se llama al aceptar sin recargar; a quien ya
 * habia aceptado, index.html se lo carga antes de que monte React.
 */
function activarAnalitica() {
  try {
    window.credexActivarAnalitica?.();
  } catch {
    // Medir nunca puede romper la pagina.
  }
}

/**
 * Guarda la decision y la aplica en esta misma carga.
 *
 * Retirar un consentimiento ya dado no descarga gtag.js ni el chat de la
 * pestaña abierta: el navegador no tiene como "desejecutar" un script. Por eso,
 * si algo pasa de aceptado a rechazado, se recarga la pagina para que lo
 * rechazado no siga corriendo.
 */
export function saveConsent({ analytics, chat }) {
  const anterior = getConsent() || DENEGADO;
  const nuevo = { analytics: analytics === true, chat: chat === true };
  enMemoria = nuevo;

  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ v: CONSENT_VERSION, ...nuevo, ts: new Date().toISOString() }),
    );
  } catch {
    // Sin localStorage la decision vale solo para esta carga (enMemoria): se
    // aplica igual, y en la proxima visita se vuelve a preguntar.
  }

  const retiro =
    (anterior.analytics && !nuevo.analytics) || (anterior.chat && !nuevo.chat);

  if (retiro) {
    window.location.reload();
    return nuevo;
  }

  if (nuevo.analytics) activarAnalitica();

  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: nuevo }));
  return nuevo;
}

export function openConsentPreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}
