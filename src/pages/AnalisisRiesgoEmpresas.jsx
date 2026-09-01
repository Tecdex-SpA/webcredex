import RouteSeo from "../components/RouteSeo";

export default function AnalisisRiesgoEmpresas() {
  return (
    <>
      <RouteSeo route="/analisis-riesgo-empresas" />

      <section className="py-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Análisis de riesgo crediticio para empresas
        </h1>

        <p className="mb-4 text-gray-600">
          El análisis de riesgo permite anticipar el comportamiento de pago de clientes...
        </p>

        <a href="/#contacto" className="text-primary-500 font-semibold">
          Solicitar demo →
        </a>
      </section>
    </>
  );
}
