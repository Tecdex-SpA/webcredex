import { Helmet } from "react-helmet-async";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog evaluación crediticia | Credex</title>
        <meta
          name="description"
          content="Artículos sobre evaluación crediticia, scoring, riesgo financiero y machine learning en crédito."
        />
        <link rel="canonical" href="https://www.credex.cl/blog" />
      </Helmet>

      <div className="pt-32 pb-20 max-w-6xl mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Blog Credex
          </h1>
          <p className="text-gray-500">
            Insights sobre evaluación crediticia, riesgo financiero y automatización.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD */}
          <a href="/blog/evaluacion-crediticia" className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">
              Evaluación crediticia para empresas
            </h3>
            <p className="text-gray-500 text-sm">
              Cómo reducir incobrables y mejorar decisiones financieras.
            </p>
          </a>

          <a href="/blog/scoring-crediticio" className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">
              Scoring crediticio
            </h3>
            <p className="text-gray-500 text-sm">
              Automatización y decisiones en tiempo real.
            </p>
          </a>

          <a href="/blog/analisis-riesgo" className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">
              Análisis de riesgo
            </h3>
            <p className="text-gray-500 text-sm">
              Cómo evitar pérdidas financieras.
            </p>
          </a>

          <a href="/blog/reducir-incobrables" className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">
              Reducir incobrables
            </h3>
            <p className="text-gray-500 text-sm">
              Estrategias para mejorar la cobranza.
            </p>
          </a>

          <a href="/blog/machine-learning" className="p-6 border rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">
              Machine Learning en crédito
            </h3>
            <p className="text-gray-500 text-sm">
              Modelos predictivos aplicados a riesgo.
            </p>
          </a>

        </div>

      </div>
    </>
  );
}