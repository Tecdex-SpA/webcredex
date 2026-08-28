export default function Impact() {

  /**
   * Esta seccion publica solo lo que tiene respaldo.
   *
   * SALIERON las cifras +30% / -25% / 100% (CRDX-C02, C03, C04): su autor
   * declaro que son estimaciones sin sustento y que no lo tendran.
   *
   * NO ENTRARON todavia las tres tarjetas de capacidad del doc 45. Dependen de
   * dos respuestas de Andres (trazabilidad exportable, derivacion humana) y de
   * cerrar X-05 sobre reglas configurables por el cliente. Reemplazar tres
   * claims sin verificar por otros tres sin verificar no arregla nada.
   *
   * Los tres elementos de la franja de prueba estan CONFIRMADOS:
   * CRDX-C08, CRDX-C09 y CRDX-C01 (certificado CQS n.o 2068).
   */
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

      {/* FRANJA DE PRUEBA */}
      <ul className="mt-12 max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:justify-center md:flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500 text-center">
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
