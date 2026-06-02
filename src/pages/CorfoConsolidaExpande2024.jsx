import { Helmet } from "react-helmet-async";

export default function CorfoConsolidaExpande2024() {
  return (
    <>
      <Helmet>
        <title>CORFO Consolida y Expande 2024 | Credex</title>
        <meta
          name="description"
          content="Credex fue beneficiario del programa CORFO Consolida y Expande 2024 para fortalecer capacidades y apoyar procesos de expansión."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-20">

        <img src="/corfo.png" className="h-24 mb-8" />

        <h1 className="text-4xl font-bold text-[#1C2543] mb-8">
          CORFO Consolida y Expande 2024
        </h1>

        <p className="text-gray-700 mb-6">
          Credex fue beneficiario del programa CORFO Consolida y Expande 2024,
          iniciativa enfocada en fortalecer capacidades empresariales y apoyar
          procesos de crecimiento sostenido.
        </p>

        <p className="text-gray-700 mb-6">
          Este programa contribuyó a consolidar procesos tecnológicos y apoyar
          la evolución continua de soluciones orientadas a la evaluación
          crediticia y gestión del riesgo.
        </p>

        <p className="text-gray-700">
          La participación en este programa reafirma el compromiso de Credex con
          la innovación, la mejora continua y el desarrollo de tecnologías de
          alto impacto para el mercado.
        </p>

      </div>
    </>
  );
}
