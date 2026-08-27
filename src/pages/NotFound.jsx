import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada | Credex</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-[70vh] flex items-center py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-primary-500 mb-4">
            Error 404
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            Esta página no existe
          </h1>

          <p className="text-gray-600 mb-10">
            Es posible que la dirección haya cambiado o que el enlace esté
            desactualizado.
          </p>

          <Link
            to="/"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Ir al inicio
          </Link>

          <nav className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <Link to="/evaluacion-crediticia" className="hover:text-primary-500">
              Evaluación crediticia
            </Link>
            <Link to="/scoring-crediticio" className="hover:text-primary-500">
              Scoring crediticio
            </Link>
            <Link to="/analisis-riesgo" className="hover:text-primary-500">
              Análisis de riesgo
            </Link>
            <Link to="/blog" className="hover:text-primary-500">
              Blog
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
