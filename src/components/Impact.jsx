export default function Impact() {

  /**
   * Esta seccion publica solo lo que tiene respaldo.
   *
   * SALIERON las cifras +30% / -25% / 100% (CRDX-C02, C03, C04): su autor
   * declaro que son estimaciones sin sustento y que no lo tendran.
   *
   * ENTRAN las tres tarjetas de capacidad, con el texto final de
   * 58_TEXTOS_FINALES_PR3B.md, apoyado en las respuestas de Andres del
   * 2026-08-28. La tarjeta 2 quedo reescrita respecto de la propuesta original
   * (CRDX-C27) y la 3 precisada con la entrega mensual real (CRDX-C28).
   *
   * Los tres elementos de la franja de prueba estan CONFIRMADOS:
   * CRDX-C08, CRDX-C09 y CRDX-C01 (certificado CQS n.o 2068).
   */
  const items = [
    {
      title: "Una consulta, todas las fuentes",
      text: "Ingresa el RUT y Credex consulta en un solo paso las fuentes tributarias, financieras y regulatorias que hoy su equipo revisa por separado."
    },
    {
      title: "Automático en los casos claros, humano en los grises",
      text: "Las aprobaciones y los rechazos evidentes se resuelven solos, con las reglas que usted define. Los casos límite llegan a una persona con todo el contexto ya reunido. Usted decide cuánto delegar."
    },
    {
      title: "Cada decisión queda registrada",
      text: "Qué datos se consultaron, qué regla se aplicó y por qué se aprobó o se rechazó. Disponible cuando la pida un comité o una auditoría, y con entrega mensual automatizada en CSV o Excel."
    }
  ];

  const pruebas = [
    "Beneficiario CORFO Escalamiento 2019",
    "CORFO Consolida y Expande 2024",
    "ISO 9001:2015 — sistema de gestión de calidad certificado, vigente hasta julio 2027"
  ];

  return (
    <section id="impacto" className="py-24 bg-white">

      <h2 className="text-4xl text-center font-bold mb-4 text-gray-900">
        Qué cambia en su operación
      </h2>

      <p className="text-center text-gray-500 max-w-2xl mx-auto px-6">
        No publicamos porcentajes prestados. Medimos su línea base con sus propios
        datos y comprometemos la mejora sobre esa base.
      </p>

      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="p-8 bg-gray-50 rounded-2xl text-left shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* FRANJA DE PRUEBA */}
      <ul className="mt-16 max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:justify-center md:flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500 text-center">
        {pruebas.map((prueba, idx) => (
          <li key={idx}>{prueba}</li>
        ))}
      </ul>

      {/* CTA */}
      <div className="text-center mt-12 px-6">
        <a
          href="#contacto"
          className="inline-block bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 hover:scale-105 transition"
        >
          Agendar una demostración
        </a>
      </div>

    </section>
  );
}
