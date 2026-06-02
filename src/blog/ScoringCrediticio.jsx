import { Helmet } from "react-helmet-async";

export default function ScoringCrediticio() {
  return (
    <>
      <Helmet>
        <title>Scoring crediticio para empresas | Credex</title>
        <meta name="description" content="Automatiza decisiones y reduce riesgo con scoring crediticio en tiempo real." />
      </Helmet>

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-6">
          Scoring crediticio para empresas
        </h1>

        <p className="text-gray-600 mb-4">
          El scoring crediticio permite evaluar clientes en segundos mediante modelos automatizados.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Beneficios
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Decisiones rápidas</li>
          <li>Mayor precisión</li>
          <li>Escalabilidad</li>
        </ul>

        <p className="text-gray-600">
          Más sobre{" "}
          <a href="/analisis-riesgo" className="text-orange-500">análisis de riesgo</a>.
        </p>

      </div>
    </>
  );
}