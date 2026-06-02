import { Helmet } from "react-helmet-async";

export default function EvaluacionCrediticiaEmpresas() {
  return (
    <>
      <Helmet>
        <title>Evaluación crediticia para empresas en Chile | Credex</title>
        <meta name="description" content="Evalúe clientes en segundos con una plataforma de evaluación crediticia para empresas en Chile. Reduzca incobrables y automatice decisiones." />
        <link rel="canonical" href="https://www.credex.cl/evaluacion-crediticia-empresas" />

        <meta property="og:title" content="Evaluación crediticia para empresas | Credex" />
        <meta property="og:description" content="Automatice decisiones de crédito y reduzca riesgo financiero con Credex." />
        <meta property="og:url" content="https://www.credex.cl/evaluacion-crediticia-empresas" />
      </Helmet>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6">
          Evaluación crediticia para empresas en Chile
        </h1>

        <p className="mb-4 text-gray-600">
          La evaluación crediticia para empresas es un proceso clave para reducir riesgos financieros y mejorar la toma de decisiones...
        </p>

        <a href="/#contacto" className="text-orange-500 font-semibold">
          Solicitar demo →
        </a>
      </section>
    </>
  );
}
