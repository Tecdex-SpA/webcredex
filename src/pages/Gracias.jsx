import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import RouteSeo from "../components/RouteSeo";
import { MARKETS } from "../config/markets";
import { trackEvent } from "../lib/analytics";

/**
 * Pagina de agradecimiento. Es la UNICA forma honesta de medir el envio del
 * formulario.
 *
 * POR QUE NO SE ESCUCHA EL SUBMIT. El formulario es un iframe de
 * apps.clientify.net: otro origen. La politica de mismo origen impide escuchar
 * su submit, leer su DOM o detectar su navegacion. Cualquier intento de eso
 * funciona en local con las protecciones bajas y se rompe en produccion.
 *
 * COMO FUNCIONA. En Clientify se configura esta URL como redireccion posterior
 * al envio. Clientify redirige DENTRO del iframe, asi que esta pagina se
 * cargaria dentro de un marco de 560px: por eso lo primero que hace es sacarse
 * del marco. El evento se emite una sola vez, ya en la ventana de arriba.
 */

/** Mercados con ruta propia a la que ofrecer volver. */
const RUTA_DE_VUELTA = {
  PE: MARKETS.PE.path,
  CO: MARKETS.CO.path,
  AR: MARKETS.AR.path,
};

/**
 * Marca de proceso, no de estado de UI: sobrevive al doble montaje que hace
 * React en StrictMode y a un remontaje del router. Un lead contado dos veces es
 * peor que no contarlo.
 */
const YA_EMITIDO = "__credexLeadEmitido";

export default function Gracias() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Solo cuando el salto fuera del marco fallo (marco de otro origen) queda algo
  // visible dentro del iframe. Ahi el enlace tiene que salir del marco solo; en
  // la ventana normal target="_top" forzaria una recarga completa al navegar.
  const enMarco = typeof window !== "undefined" && window.top !== window.self;

  const formId = params.get("form_id");
  const market = params.get("market")?.toUpperCase();
  const volverA = RUTA_DE_VUELTA[market] || "/";

  useEffect(() => {
    if (typeof window === "undefined") return;

    // ROMPER EL IFRAME. Clientify redirige dentro del marco; esta pagina tiene
    // que ocupar la ventana completa o la persona lee una confirmacion dentro de
    // una caja de 560px, con el resto del sitio detras.
    if (window.top !== window.self) {
      try {
        window.top.location.href = window.location.href;
      } catch {
        // Marco de otro origen: el navegador no deja navegar la ventana de
        // arriba. La confirmacion igual se ve; el enlace de vuelta sale del
        // marco por su cuenta con target="_top".
      }

      // NO se emite desde dentro del marco: al saltar, la ventana de arriba
      // vuelve a cargar esta misma pagina y la emite ella. Emitir en los dos
      // lados contaria cada lead dos veces.
      return;
    }

    if (window[YA_EMITIDO]) return;
    window[YA_EMITIDO] = true;

    trackEvent("generate_lead", { form_id: formId, market });
  }, [formId, market]);

  return (
    <>
      <RouteSeo route="/gracias" />

      <section className="flex min-h-screen items-center bg-white px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-primary-500">
            Credex
          </p>

          <h1 className="mb-6 text-4xl font-semibold text-gray-900 md:text-5xl">
            Solicitud recibida
          </h1>

          <p className="mb-4 text-lg text-gray-600">
            La solicitud de contacto llegó al equipo de Credex.
          </p>

          <p className="mb-10 text-gray-600">
            El equipo comercial revisará la información enviada y responderá al
            correo indicado en el formulario. No hace falta volver a enviarlo.
          </p>

          <Link
            to={volverA}
            target={enMarco ? "_top" : undefined}
            className="inline-block rounded-xl bg-primary-500 px-8 py-3 font-semibold text-white transition hover:bg-primary-600"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
}
