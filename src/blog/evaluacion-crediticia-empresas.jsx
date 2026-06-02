import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog1() {
  return (
    <>
      <Helmet>
        <title>Evaluación crediticia para empresas: guía completa | Credex</title>
        <meta name="description" content="Aprenda cómo evaluar el riesgo crediticio de clientes y reducir incobrables en su empresa." />
      </Helmet>

      <Header />

      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-4xl font-semibold mb-6">
            Evaluación crediticia para empresas: guía completa
          </h1>

          <p className="text-gray-600 mb-6">
            La evaluación crediticia es clave para cualquier empresa que otorga crédito. Permite analizar el riesgo de clientes y evitar incobrables.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            ¿Qué es la evaluación crediticia?
          </h2>

          <p className="text-gray-600 mb-6">
            Es el proceso de analizar información financiera para determinar la capacidad de pago de un cliente.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Cómo mejorar la evaluación crediticia
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Automatizar decisiones</li>
            <li>Usar múltiples fuentes de datos</li>
            <li>Aplicar scoring crediticio</li>
          </ul>

        </div>
      </section>

      <Footer />
    </>
  );
}