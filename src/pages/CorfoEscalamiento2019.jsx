import { Helmet } from "react-helmet-async";

export default function CorfoEscalamiento2019() {
  return (
    <>
      <Helmet>
        <title>CORFO Escalamiento 2019 | Credex</title>
        <meta
          name="description"
          content="Credex fue beneficiario del programa CORFO Escalamiento 2019 para potenciar el crecimiento y expansión de soluciones tecnológicas."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-20">

        <img src="/corfo.png" className="h-24 mb-8" />

        <h1 className="text-4xl font-bold text-[#1C2543] mb-8">
          CORFO Escalamiento 2019
        </h1>

        <p className="text-gray-700 mb-6">
          Credex fue beneficiario del programa CORFO Escalamiento 2019,
          iniciativa destinada a impulsar el crecimiento de empresas innovadoras
          con potencial de expansión comercial.
        </p>

        <p className="text-gray-700 mb-6">
          Este apoyo permitió fortalecer capacidades tecnológicas, acelerar el
          desarrollo de soluciones y continuar avanzando en la modernización de
          procesos de evaluación crediticia basados en datos.
        </p>

        <p className="text-gray-700">
          La participación en este programa forma parte del compromiso de Credex
          con la innovación, la eficiencia y el desarrollo de herramientas que
          aporten valor a empresas e instituciones financieras.
        </p>

      </div>
    </>
  );
}
