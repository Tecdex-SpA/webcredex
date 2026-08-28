export default function CorfoSupport() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Innovación respaldada por
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-4">
            Programas CORFO
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-6">
            Credex ha sido beneficiario de programas CORFO orientados al crecimiento,
            consolidación y expansión de soluciones tecnológicas aplicadas a la
            evaluación crediticia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <a
            href="/corfo-escalamiento-2019"
            className="border rounded-2xl p-8 hover:shadow-xl transition bg-white"
          >
            <img
              src="/corfo.png"
              alt="CORFO"
              className="h-20 mb-6"
            />

            <h3 className="text-2xl font-semibold text-dark">
              Escalamiento 2019
            </h3>

            <p className="text-gray-600 mt-4">
              Programa orientado al fortalecimiento y crecimiento de soluciones
              innovadoras con potencial de expansión comercial.
            </p>
          </a>

          <a
            href="/corfo-consolida-expande-2024"
            className="border rounded-2xl p-8 hover:shadow-xl transition bg-white"
          >
            <img
              src="/corfo.png"
              alt="CORFO"
              className="h-20 mb-6"
            />

            <h3 className="text-2xl font-semibold text-dark">
              Consolida y Expande 2024
            </h3>

            <p className="text-gray-600 mt-4">
              Programa orientado a consolidar capacidades tecnológicas y apoyar
              procesos de expansión y crecimiento empresarial.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}
