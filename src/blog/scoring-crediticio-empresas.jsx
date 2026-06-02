import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog2() {
  return (
    <>
      <Helmet>
        <title>Scoring crediticio: cómo funciona | Credex</title>
        <meta name="description" content="Descubra cómo funciona el scoring crediticio y cómo aplicarlo en su empresa." />
      </Helmet>

      <Header />

      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-4xl font-semibold mb-6">
            Scoring crediticio: cómo funciona
          </h1>

          <p className="text-gray-600 mb-6">
            El scoring crediticio permite clasificar clientes según su riesgo y tomar decisiones automatizadas.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Beneficios del scoring
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Decisiones rápidas</li>
            <li>Reducción de riesgo</li>
            <li>Mayor aprobación</li>
          </ul>

        </div>
      </section>

      <Footer />
    </>
  );
}