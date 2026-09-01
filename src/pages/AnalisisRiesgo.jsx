import RouteSeo from "../components/RouteSeo";

export default function AnalisisRiesgo() {
  return (
    <>
      <RouteSeo route="/analisis-riesgo" />

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            Análisis de riesgo crediticio
          </h1>

          <p className="text-gray-600 mb-6">
            El análisis de riesgo crediticio permite anticipar el comportamiento de pago de los
            clientes y tomar decisiones informadas antes de otorgar crédito.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            ¿Qué incluye el análisis de riesgo?
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Información financiera</li>
            <li>Historial crediticio</li>
            <li>Datos regulatorios</li>
            <li>Scoring automatizado</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Beneficios para su empresa
          </h2>

          <p className="text-gray-600">
            Reduce incobrables, mejora la toma de decisiones y permite escalar la operación con
            mayor control.
          </p>

        </div>
      </section>
    </>
  );
}