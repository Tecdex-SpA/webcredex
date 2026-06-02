import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog3() {
  return (
    <>
      <Helmet>
        <title>Cómo reducir incobrables en empresas | Credex</title>
        <meta name="description" content="Estrategias para reducir incobrables y mejorar la gestión de riesgo." />
      </Helmet>

      <Header />

      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-4xl font-semibold mb-6">
            Cómo reducir incobrables en empresas
          </h1>

          <p className="text-gray-600 mb-6">
            Reducir incobrables es clave para la rentabilidad. Esto se logra con mejor evaluación y control del riesgo.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Estrategias clave
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Evaluación previa</li>
            <li>Automatización</li>
            <li>Seguimiento continuo</li>
          </ul>

        </div>
      </section>

      <Footer />
    </>
  );
}