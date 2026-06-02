import { Helmet } from "react-helmet-async";

export default function ReducirIncobrables() {
  return (
    <>
      <Helmet>
        <title>Cómo reducir incobrables en empresas | Credex</title>
        <meta name="description" content="Estrategias para reducir incobrables y mejorar la evaluación crediticia." />
      </Helmet>

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-6">
          Cómo reducir incobrables en empresas
        </h1>

        <p className="text-gray-600 mb-4">
          Reducir incobrables es clave para mantener la estabilidad financiera.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Estrategias
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Automatización</li>
          <li>Scoring crediticio</li>
          <li>Machine Learning</li>
        </ul>

        <p className="text-gray-600">
          Ver{" "}
          <a href="/evaluacion-crediticia" className="text-orange-500">evaluación crediticia</a>.
        </p>

      </div>
    </>
  );
}