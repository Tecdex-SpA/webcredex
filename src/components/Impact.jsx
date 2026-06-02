export default function Impact() {

  const items = [
    {
      value: "+30%",
      label: "Aumento en aprobación sin deterioro de cartera"
    },
    {
      value: "-25%",
      label: "Reducción del riesgo crediticio"
    },
    {
      value: "100%",
      label: "Trazabilidad de decisiones"
    }
  ];

  return (
    <section id="impacto" className="py-24 bg-white">

      <h2 className="text-4xl text-center font-bold mb-4 text-gray-900">
        Impacto en el negocio
      </h2>

      <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
        Resultados medibles en aprobación, riesgo y control operativo.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">

        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-8 bg-gray-50 rounded-2xl text-center shadow-sm hover:shadow-md transition"
          >

            {/* VALOR */}
            <div className="text-4xl font-bold text-gray-900 mb-3">
              {item.value}
            </div>

            {/* LABEL */}
            <p className="text-gray-500 text-sm">
              {item.label}
            </p>

          </div>
        ))}

      </div>

      {/* 🔥 CTA AGREGADO */}
      <div className="text-center mt-16">

  <a
   href="#contacto"
   className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition"
  >
    Agendar demo personalizada
  </a>
</div>

    </section>
  );
}