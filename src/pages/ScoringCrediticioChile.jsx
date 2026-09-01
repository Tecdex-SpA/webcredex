import RouteSeo from "../components/RouteSeo";

export default function ScoringCrediticioChile() {
  return (
    <>
      <RouteSeo route="/scoring-crediticio-chile" />

      <section className="py-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Scoring crediticio en Chile para empresas
        </h1>

        <p className="mb-4 text-gray-600">
          El scoring crediticio permite evaluar el riesgo de clientes mediante modelos automatizados...
        </p>

        <a href="/#contacto" className="text-primary-500 font-semibold">
          Ver cómo funciona →
        </a>
      </section>
    </>
  );
}
