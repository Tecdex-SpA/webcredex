import { Helmet } from "react-helmet-async";

export default function AnalisisRiesgo() {
  return (
    <>
      <Helmet>
        <title>Análisis de riesgo crediticio | Credex</title>
        <meta name="description" content="Reduce riesgo financiero y evita incobrables con análisis de riesgo crediticio." />
        <link rel="canonical" href="https://www.credex.cl/blog/analisis-riesgo" />
      </Helmet>

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-6">
          Análisis de riesgo crediticio
        </h1>

        <p className="text-gray-600 mb-4">
          El análisis de riesgo permite identificar clientes con mayor probabilidad de incumplimiento.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Problemas tradicionales
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Evaluación manual</li>
          <li>Lentitud</li>
          <li>Baja precisión</li>
        </ul>

        <p className="text-gray-600">
          Conozca más sobre{" "}
          <a href="/evaluacion-crediticia" className="text-primary-500">evaluación crediticia</a>.
        </p>

      </div>
    </>
  );
}