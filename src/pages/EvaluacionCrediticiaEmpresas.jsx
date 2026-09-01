import RouteSeo from "../components/RouteSeo";

export default function EvaluacionCrediticiaEmpresas() {
  return (
    <>
      <RouteSeo route="/evaluacion-crediticia-empresas" />

      <section className="py-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Evaluación crediticia para empresas en Chile
        </h1>

        <p className="mb-4 text-gray-600">
          La evaluación crediticia para empresas es un proceso clave para reducir riesgos financieros y mejorar la toma de decisiones...
        </p>

        <a href="/#contacto" className="text-primary-500 font-semibold">
          Solicitar demo →
        </a>
      </section>
    </>
  );
}
