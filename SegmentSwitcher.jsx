import { useState } from "react";

export default function SegmentSwitcher() {

  const [segment, setSegment] = useState("automotriz");

  const content = {
    automotriz: {
      title: "Apruebe más financiamientos automotrices en segundos",
      desc: "Evalúe clientes en el punto de venta y aumente la tasa de aprobación sin elevar el riesgo.",
    },
    fintech: {
      title: "Automatice decisiones crediticias en su fintech",
      desc: "Scoring en tiempo real con integración a burós y reglas configurables.",
    },
    financiera: {
      title: "Optimice su evaluación de riesgo crediticio",
      desc: "Mejore la calidad de cartera y reduzca el riesgo operativo.",
    },
    b2b: {
      title: "Evalúe empresas y clientes comerciales en segundos",
      desc: "Acceda a información financiera clave para decisiones más seguras.",
    }
  };

  return (
    <section className="py-16 bg-white text-center">

      {/* BOTONES */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">

        {Object.keys(content).map((key) => (
          <button
            key={key}
            onClick={() => setSegment(key)}
            className={`px-4 py-2 rounded-lg border ${
              segment === key
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {key}
          </button>
        ))}

      </div>

      {/* CONTENIDO DINÁMICO */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          {content[segment].title}
        </h2>

        <p className="text-gray-500">
          {content[segment].desc}
        </p>
      </div>

    </section>
  );
}