import RouteSeo from "../components/RouteSeo";
import { openConsentPreferences } from "../lib/consent";

/**
 * Politica de privacidad y de cookies.
 *
 * BORRADOR (ORG-4). Este texto lo redacto el equipo tecnico como punto de
 * partida y NO esta aprobado: lo revisa el juridico y lo aprueba Mario antes del
 * merge. Todo lo marcado [COMPLETAR] o [VERIFICAR] es un dato que el codigo no
 * conoce. scripts/check-legal.mjs impide desplegarlo a produccion mientras
 * LEGAL_APROBADO siga en false.
 *
 * Va con noindex (UTILITY_ROUTES en src/config/seo.js) hasta que este aprobada.
 */
const LEGAL_APROBADO = false;

const SECCION = "mb-10";
const TITULO = "mb-3 text-xl font-semibold text-gray-900";
const PARRAFO = "mb-3 text-gray-700";

const SERVICIOS = [
  {
    servicio: "Clientify",
    uso: "Formulario de contacto y chat de atención; gestión de solicitudes comerciales",
    pais: "[VERIFICAR: España / UE]",
    requiere: "Formulario: su propia casilla. Chat: consentimiento «Chat de atención»",
  },
  {
    servicio: "Google Analytics 4",
    uso: "Medición de visitas y de la publicación de origen (content_id)",
    pais: "[VERIFICAR: Estados Unidos]",
    requiere: "Consentimiento «Analítica»",
  },
  {
    servicio: "Vercel",
    uso: "Alojamiento del sitio; registros técnicos del servidor",
    pais: "[VERIFICAR: Estados Unidos]",
    requiere: "Necesario para servir el sitio",
  },
];

export default function Privacidad() {
  return (
    <>
      <RouteSeo route="/privacidad" />

      <section className="bg-white px-6 py-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-primary-500">
            Credex
          </p>

          <h1 className="mb-4 text-4xl font-semibold text-gray-900">
            Política de privacidad y cookies
          </h1>

          <p className="mb-12 text-sm text-gray-500">
            Última actualización: [COMPLETAR fecha de aprobación]
          </p>

          <section className={SECCION}>
            <h2 className={TITULO}>1. Responsable</h2>
            <p className={PARRAFO}>
              Servicios de Información Credex SpA [VERIFICAR razón social], RUT
              [COMPLETAR], con domicilio en Guardia Vieja 202, oficina 302,
              Providencia, Santiago, Chile.
            </p>
            <p className={PARRAFO}>
              Contacto para temas de privacidad: [COMPLETAR correo dedicado o
              confirmar contacto@credex.cl].
            </p>
          </section>

          <section className={SECCION}>
            <h2 className={TITULO}>2. Qué datos tratamos</h2>
            <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
              <li>
                Los que usted ingresa en el formulario de contacto: [COMPLETAR
                lista exacta de campos del formulario de Clientify].
              </li>
              <li>Lo que escriba en el chat, si lo usa.</li>
              <li>
                Si acepta la analítica: datos de navegación (páginas visitadas,
                dispositivo, país aproximado y la publicación desde la que
                llegó).
              </li>
              <li>
                Registros técnicos del servidor, como la dirección IP, para
                servir el sitio y protegerlo.
              </li>
            </ul>
          </section>

          <section className={SECCION}>
            <h2 className={TITULO}>3. Para qué los usamos</h2>
            <ul className="mb-3 list-disc space-y-2 pl-6 text-gray-700">
              <li>Responder su solicitud y coordinar una demostración.</li>
              <li>Atender sus consultas por el chat.</li>
              <li>Medir el uso del sitio para mejorarlo, solo si lo acepta.</li>
            </ul>
            <p className={PARRAFO}>
              Base que permite el tratamiento: [COMPLETAR juridico: consentimiento
              u otra base, según la normativa chilena vigente].
            </p>
          </section>

          <section className={SECCION}>
            <h2 className={TITULO}>4. Con quién los compartimos</h2>
            <p className={PARRAFO}>
              No vendemos sus datos. Usamos estos proveedores, que los tratan por
              cuenta de Credex:
            </p>

            <div className="mb-3 overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="border-b border-gray-200 text-gray-900">
                  <tr>
                    <th className="py-2 pr-4 font-semibold">Servicio</th>
                    <th className="py-2 pr-4 font-semibold">Para qué</th>
                    <th className="py-2 pr-4 font-semibold">País</th>
                    <th className="py-2 font-semibold">Cuándo se usa</th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICIOS.map(({ servicio, uso, pais, requiere }) => (
                    <tr key={servicio} className="border-b border-gray-100 align-top">
                      <td className="py-2 pr-4 font-medium">{servicio}</td>
                      <td className="py-2 pr-4">{uso}</td>
                      <td className="py-2 pr-4">{pais}</td>
                      <td className="py-2">{requiere}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={PARRAFO}>
              [COMPLETAR juridico: transferencia internacional de datos y sus
              garantías.]
            </p>
          </section>

          <section className={SECCION}>
            <h2 className={TITULO}>5. Cookies y almacenamiento en su navegador</h2>
            <p className={PARRAFO}>
              Las necesarias guardan su decisión sobre cookies, el país que
              eligió en el selector y si cerró el aviso de país. Google Analytics
              y el chat de Clientify solo se cargan si usted los acepta.
            </p>
            <button
              type="button"
              onClick={openConsentPreferences}
              className="mt-2 inline-block rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition hover:bg-primary-600"
            >
              Configurar cookies
            </button>
          </section>

          <section className={SECCION}>
            <h2 className={TITULO}>6. Cuánto tiempo los guardamos</h2>
            <p className={PARRAFO}>[COMPLETAR plazos por tipo de dato.]</p>
          </section>

          <section className={SECCION}>
            <h2 className={TITULO}>7. Sus derechos</h2>
            <p className={PARRAFO}>
              Puede pedir acceso, rectificación, supresión u oposición al
              tratamiento de sus datos, y retirar su consentimiento cuando
              quiera, escribiendo a [COMPLETAR correo]. [COMPLETAR juridico:
              derechos y plazos de respuesta según la normativa vigente.]
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
