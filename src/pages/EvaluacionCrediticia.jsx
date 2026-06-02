import { Helmet } from "react-helmet-async";

export default function EvaluacionCrediticia() {
  return (
    <>
      <Helmet>
        <title>Evaluación crediticia para empresas en Chile | Credex</title>
        <meta
          name="description"
          content="Evalúe clientes en segundos y reduzca incobrables. Plataforma de evaluación crediticia para empresas en Chile."
        />
        <link rel="canonical" href="https://credex.cl/evaluacion-crediticia" />
      </Helmet>

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            Evaluación crediticia para empresas en Chile
          </h1>

          <p className="text-gray-600 mb-6">
            Credex permite evaluar clientes en segundos utilizando información financiera,
            burós de crédito y reglas automatizadas para tomar decisiones seguras.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            ¿Por qué es importante evaluar el riesgo crediticio?
          </h2>

          <p className="text-gray-600 mb-6">
            Evaluar correctamente a los clientes permite reducir incobrables, mejorar la aprobación
            y aumentar las ventas sin asumir más riesgo financiero.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Beneficios de Credex
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Evaluación en tiempo real</li>
            <li>Integración con múltiples fuentes</li>
            <li>Automatización de decisiones</li>
            <li>Reducción de incobrables</li>
          </ul>

        </div>
      </section>
    </>
  );
}