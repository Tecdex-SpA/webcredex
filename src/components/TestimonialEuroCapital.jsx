/**
 * Testimonio de EuroCapital. UNICA prueba de cliente publicable del sitio.
 *
 * QUE HAY AUTORIZADO Y QUE NO (confirmado por Mario el 2026-09-01):
 *   · SI: citar el texto y nombrar a la persona, su cargo y la empresa.
 *   · NO: el logo de EuroCapital. Citar el nombre y usar la marca grafica son
 *     dos permisos distintos y solo existe el primero. Hay un archivo de logo en
 *     el repo (/logos/eurocapital.png): NO se usa aca.
 *   · NO: foto de la persona. No hace falta y no la hay.
 *
 * REGLAS AL EDITAR ESTE ARCHIVO:
 *   · El texto de la cita es LITERAL. No se parafrasea, no se acorta y no se le
 *     agrega ni se le quita una palabra. La coma antes de "destacamos" viene
 *     asi en el original y se respeta.
 *   · No se le agrega NINGUNA cifra, ni un dato de contexto sobre el cliente. El
 *     testimonio no trae cifras y esa es justamente su virtud: es publicable sin
 *     abrir un claim de rendimiento que despues haya que sostener.
 *   · No se acompana de afirmaciones sobre el desempeno del modelo. Se puede
 *     decir QUE hace Credex; no CUANTO mejor lo hace.
 *
 * El nombre de la empresa se escribe "EuroCapital", con C mayuscula en medio.
 */

/** Literal. Ver arriba antes de tocar un caracter. */
const CITA =
  "Nuestra experiencia trabajando con Credex en la implementación y evolución del Motor de Decisión y Machine Learning ha sido muy positiva. Estas herramientas nos han permitido avanzar hacia evaluaciones más ágiles, consistentes y eficientes, destacamos especialmente el acompañamiento técnico y la disposición permanente del equipo de Credex, que ha sido clave para adaptar las soluciones a nuestras necesidades y continuar fortaleciendo nuestros procesos.";

const AUTORIA = {
  nombre: "Ivonne Fuentes",
  cargo: "Subgerente de Riesgo Comercial",
  empresa: "EuroCapital",
};

export default function TestimonialEuroCapital() {
  return (
    <section id="testimonio" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          En palabras de un cliente
        </h2>

        {/* figure/blockquote/figcaption: la atribucion queda asociada a la cita
            en la estructura del documento, no solo por cercania visual. */}
        <figure className="rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <blockquote className="text-lg leading-relaxed text-gray-700 md:text-xl">
            {CITA}
          </blockquote>

          <figcaption className="mt-8 border-t border-gray-200 pt-6">
            <div className="font-semibold text-gray-900">{AUTORIA.nombre}</div>
            <div className="text-gray-600">{AUTORIA.cargo}</div>
            <div className="text-gray-600">{AUTORIA.empresa}</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
