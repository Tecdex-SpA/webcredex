import { Helmet } from "react-helmet-async";

export default function AnalisisRiesgoEmpresas() {
  return (
    <>
      <Helmet>
        <title>Análisis de riesgo crediticio para empresas | Credex</title>
        <meta name="description" content="Herramienta de análisis de riesgo crediticio para empresas. Anticipe comportamiento de pago y reduzca pérdidas con Credex." />
        <link rel="canonical" href="https://www.credex.cl/analisis-riesgo-empresas" />

        <meta property="og:title" content="Análisis de riesgo para empresas | Credex" />
        <meta property="og:description" content="Identifique riesgos financieros con modelos predictivos y automatización." />
        <meta property="og:url" content="https://www.credex.cl/analisis-riesgo-empresas" />
      </Helmet>

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
