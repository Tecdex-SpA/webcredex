import { Helmet } from "react-helmet-async";

export default function MachineLearningCredito() {
  return (
    <>
      <Helmet>
        <title>Machine Learning en evaluación crediticia | Credex</title>
        <meta name="description" content="Cómo el Machine Learning mejora la evaluación crediticia y reduce riesgo." />
        <link rel="canonical" href="https://www.credex.cl/blog/machine-learning" />
      </Helmet>

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-6">
          Machine Learning en evaluación crediticia
        </h1>

        <p className="text-gray-600 mb-4">
          El Machine Learning permite predecir el comportamiento de pago de clientes con mayor precisión.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Beneficios
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Mayor precisión</li>
          <li>Automatización</li>
          <li>Mejor toma de decisiones</li>
        </ul>

        <p className="text-gray-600">
          Ver{" "}
          <a href="/scoring-crediticio" className="text-orange-500">scoring crediticio</a>.
        </p>

      </div>
    </>
  );
}