import RouteSeo from "../components/RouteSeo";

export default function ScoringCrediticio() {
  return (
    <>
      <RouteSeo route="/blog/scoring-crediticio" />

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-6">
          Scoring crediticio para empresas
        </h1>

        <p className="text-gray-600 mb-4">
          El scoring crediticio ordena a los solicitantes según su riesgo estimado, usando un
          modelo construido sobre el historial de operaciones anteriores. Traduce muchas
          variables en un único valor comparable, para que la política de crédito se aplique
          igual en todos los casos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Qué resuelve y qué no
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Hace comparables solicitudes que llegan con antecedentes distintos</li>
          <li>Aplica el mismo criterio a todos los casos, sin depender de quién evalúe</li>
          <li>No decide por sí solo: el corte de aprobación lo fija la política de cada empresa</li>
          <li>No corrige datos incompletos ni desactualizados; los arrastra</li>
        </ul>

        <p className="text-gray-600">
          Más sobre{" "}
          <a href="/analisis-riesgo" className="text-primary-500">análisis de riesgo</a>.
        </p>

      </div>
    </>
  );
}