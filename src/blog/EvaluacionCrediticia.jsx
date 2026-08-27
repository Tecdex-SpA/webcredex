import { Helmet } from "react-helmet-async";

export default function EvaluacionCrediticia() {
  return (
    <>
      <Helmet>
        <title>Evaluación crediticia para empresas en Chile | Credex</title>
        <meta name="description" content="Cómo evaluar clientes, reducir incobrables y mejorar decisiones crediticias." />
        <link rel="canonical" href="https://www.credex.cl/blog/evaluacion-crediticia" />
      </Helmet>

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-6">
          Evaluación crediticia para empresas en Chile
        </h1>

        <p className="text-gray-600 mb-4">
          La evaluación crediticia es clave para reducir incobrables y mejorar la toma de decisiones financieras.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Problemas comunes
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Procesos manuales</li>
          <li>Falta de información consolidada</li>
          <li>Decisiones inconsistentes</li>
        </ul>

        <p className="text-gray-600">
          Más sobre{" "}
          <a href="/scoring-crediticio" className="text-orange-500">
            scoring crediticio
          </a>
        </p>

      </div>
    </>
  );
}