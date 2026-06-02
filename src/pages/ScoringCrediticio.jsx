import { Helmet } from "react-helmet-async";

export default function ScoringCrediticio() {
  return (
    <>
      <Helmet>
        <title>Scoring crediticio para empresas | Credex</title>
        <meta
          name="description"
          content="Sistema de scoring crediticio en tiempo real para empresas. Automatice decisiones y reduzca riesgo financiero."
        />
        <link rel="canonical" href="https://credex.cl/scoring-crediticio" />
      </Helmet>

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            Scoring crediticio para empresas
          </h1>

          <p className="text-gray-600 mb-6">
            El scoring crediticio permite clasificar clientes según su nivel de riesgo utilizando
            datos financieros, comportamiento histórico y fuentes externas.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Cómo funciona el scoring crediticio
          </h2>

          <p className="text-gray-600 mb-6">
            Credex combina múltiples fuentes de información para generar un score en tiempo real,
            facilitando decisiones automatizadas y consistentes.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Ventajas para su empresa
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Decisiones más rápidas</li>
            <li>Menor riesgo financiero</li>
            <li>Mayor aprobación de clientes</li>
            <li>Escalabilidad del proceso</li>
          </ul>

        </div>
      </section>
    </>
  );
}