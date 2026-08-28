import { Helmet } from "react-helmet-async";

export default function ScoringCrediticioChile() {
  return (
    <>
      <Helmet>
        <title>Scoring crediticio en Chile para empresas | Credex</title>
        <meta name="description" content="Sistema de scoring crediticio en Chile para empresas. Evalúe clientes automáticamente y mejore decisiones con Credex." />
        <link rel="canonical" href="https://www.credex.cl/scoring-crediticio-chile" />

        <meta property="og:title" content="Scoring crediticio para empresas | Credex" />
        <meta property="og:description" content="Automatice evaluación de riesgo con scoring crediticio en tiempo real." />
        <meta property="og:url" content="https://www.credex.cl/scoring-crediticio-chile" />
      </Helmet>

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
