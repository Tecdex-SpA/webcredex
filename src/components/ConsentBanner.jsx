import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";

import {
  OPEN_PREFERENCES_EVENT,
  getConsent,
  saveConsent,
} from "../lib/consent";

/**
 * Aviso de cookies y panel de preferencias. Global: se monta en main.jsx, igual
 * que GeoNotice, para que exista en todas las rutas y no solo donde hay footer.
 *
 * TEXTOS EN BORRADOR (ORG-4): lo que dice este aviso es texto legal y lo revisa
 * el juridico antes del merge. Cambiar la redaccion es libre; cambiar QUE se
 * carga en cada categoria obliga a subir CONSENT_VERSION en consent.js.
 *
 * Reglas de diseño:
 *   · "Rechazar" pesa lo mismo que "Aceptar": mismo tamaño, mismo estilo. Un
 *     rechazo escondido no es un consentimiento libre.
 *   · No bloquea la pagina ni tapa el formulario: es una franja fija abajo.
 *   · Nada se marca por defecto en el panel.
 */

const CATEGORIAS = [
  {
    clave: "analytics",
    nombre: "Analítica",
    detalle:
      "Google Analytics 4: cuántas personas visitan el sitio, qué páginas leen y desde qué publicación llegaron.",
  },
  {
    clave: "chat",
    nombre: "Chat de atención",
    detalle:
      "Chat de Clientify para conversar con el equipo comercial desde el sitio.",
  },
];

const BOTON =
  "rounded-lg border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111C3A] focus:outline-none focus:ring-2 focus:ring-primary-400";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(() => getConsent() === null);
  const [configurando, setConfigurando] = useState(false);
  const [eleccion, setEleccion] = useState(
    () => getConsent() || { analytics: false, chat: false },
  );
  const tituloId = useId();

  useEffect(() => {
    const abrir = () => {
      setEleccion(getConsent() || { analytics: false, chat: false });
      setConfigurando(true);
      setVisible(true);
    };

    window.addEventListener(OPEN_PREFERENCES_EVENT, abrir);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, abrir);
  }, []);

  if (!visible) return null;

  const decidir = (decision) => {
    saveConsent(decision);
    setVisible(false);
    setConfigurando(false);
  };

  return (
    <section
      role="dialog"
      aria-labelledby={tituloId}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#111C3A] text-white shadow-2xl"
    >
      <div className="mx-auto max-w-5xl px-4 py-5 sm:px-8">
        <h2 id={tituloId} className="mb-2 text-base font-semibold">
          Cookies y servicios de terceros
        </h2>

        <p className="mb-4 text-sm text-white/80">
          Usamos solo lo necesario para que el sitio funcione. Con su permiso,
          también usamos Google Analytics para medir las visitas y el chat de
          Clientify para atenderle. Puede cambiar su decisión cuando quiera en
          la{" "}
          <Link to="/privacidad" className="underline hover:text-primary-300">
            Política de privacidad
          </Link>
          .
        </p>

        {configurando && (
          <fieldset className="mb-4 space-y-3">
            <legend className="sr-only">Elegir qué servicios aceptar</legend>

            <label className="flex items-start gap-3 text-sm text-white/60">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <strong className="text-white/80">Necesarias.</strong> Guardan
                esta decisión y el país que elija en el selector. Siempre
                activas.
              </span>
            </label>

            {CATEGORIAS.map(({ clave, nombre, detalle }) => (
              <label key={clave} className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={eleccion[clave]}
                  onChange={(event) =>
                    setEleccion((actual) => ({ ...actual, [clave]: event.target.checked }))
                  }
                  className="mt-1 accent-primary-500"
                />
                <span>
                  <strong>{nombre}.</strong> {detalle}
                </span>
              </label>
            ))}
          </fieldset>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className={BOTON}
            onClick={() => decidir({ analytics: false, chat: false })}
          >
            Rechazar
          </button>

          {configurando ? (
            <button type="button" className={BOTON} onClick={() => decidir(eleccion)}>
              Guardar mi elección
            </button>
          ) : (
            <button type="button" className={BOTON} onClick={() => setConfigurando(true)}>
              Configurar
            </button>
          )}

          <button
            type="button"
            className={BOTON}
            onClick={() => decidir({ analytics: true, chat: true })}
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </section>
  );
}
