import { useEffect, useState } from "react";
import { MARKETS } from "../config/markets";
import { isChileHost } from "../config/seo";

/**
 * Aviso geografico NO BLOQUEANTE. Reemplaza a la redireccion por IP que vivia en
 * index.html (D14, Opcion A).
 *
 * Reglas duras, en el mismo orden en que las pide la mision:
 *   · Es un ENLACE, nunca un redirect. Nadie es sacado de credex.cl sin hacer clic.
 *   · No oculta contenido ni desplaza el layout: es un overlay fijo, fuera del
 *     flujo del documento, y el header se corre con --credex-notice-h, que
 *     tambien es fixed. El contenido de la pagina no se mueve nunca.
 *   · Se puede cerrar y el cierre se recuerda en localStorage.
 *   · Si /api/geo falla o demora, NO PASA NADA: no aparece la franja y la pagina
 *     se ve completa. El modo de fallo es "no molestar", nunca "expulsar".
 */

const DISMISS_KEY = "credex_geo_notice_dismissed";
const TIMEOUT_MS = 2500;

// Solo estos tres tienen sitio propio al que ofrecer ir. Cualquier otro pais
// —incluido el caso de Googlebot, que rastrea desde EE.UU.— no ve nada.
const CON_SITIO_PROPIO = { PE: MARKETS.PE, CO: MARKETS.CO, AR: MARKETS.AR };

function leerCierre() {
  try {
    return localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

export default function GeoNotice() {
  const [market, setMarket] = useState(null);

  useEffect(() => {
    if (!isChileHost(window.location.hostname)) return undefined;
    if (leerCierre()) return undefined;

    const control = new AbortController();
    const timer = setTimeout(() => control.abort(), TIMEOUT_MS);

    fetch("/api/geo", {
      signal: control.signal,
      cache: "no-store",
      credentials: "same-origin",
      headers: { Accept: "application/json" },
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        const code = String(data?.country || "").toUpperCase();
        if (CON_SITIO_PROPIO[code]) setMarket(CON_SITIO_PROPIO[code]);
      })
      .catch(() => {})
      .finally(() => clearTimeout(timer));

    return () => {
      clearTimeout(timer);
      control.abort();
    };
  }, []);

  // El header es fixed y lee esta variable. Correrlo no mueve el contenido.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--credex-notice-h", market ? "2.75rem" : "0px");
    return () => root.style.setProperty("--credex-notice-h", "0px");
  }, [market]);

  if (!market) return null;

  const cerrar = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Sin localStorage el aviso simplemente vuelve en la proxima visita.
    }
    setMarket(null);
  };

  return (
    <div
      role="region"
      aria-label="Aviso de país"
      className="fixed top-0 left-0 w-full z-[60] bg-dark text-white"
    >
      <div className="relative max-w-7xl mx-auto flex items-center justify-center gap-3 h-11 px-14 text-sm">
        <span aria-hidden="true">{market.flag}</span>

        <p className="truncate">
          Credex tiene un sitio para {market.areaServed}.{" "}
          <a
            href={market.siteUrl}
            className="font-semibold underline underline-offset-2 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Ir al sitio de {market.areaServed}
          </a>
        </p>

        <button
          type="button"
          onClick={cerrar}
          aria-label="Cerrar aviso"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full text-lg leading-none hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
        >
          ×
        </button>
      </div>
    </div>
  );
}
