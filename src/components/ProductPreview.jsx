export default function ProductPreview() {
  return (
    <section className="py-32 bg-[#0B1F3A] text-white relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[700px] h-[700px] bg-cyan-400/10 blur-3xl rounded-full top-0 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Todo el análisis crediticio <br />
            en una sola plataforma
          </h2>

          <p className="text-gray-300 text-lg">
            Visualice scoring, alertas, comportamiento financiero y decisiones en tiempo real.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IZQUIERDA - FEATURES */}
          <div className="space-y-8">

            <div className="flex gap-4 items-start">
              <div className="text-cyan-400 text-xl">●</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Evaluación en segundos
                </h4>
                <p className="text-gray-400 text-sm">
                  Procesamiento automático con múltiples fuentes de información.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-cyan-400 text-xl">●</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Información consolidada
                </h4>
                <p className="text-gray-400 text-sm">
                  Todo el perfil financiero del cliente en una sola vista.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="text-cyan-400 text-xl">●</div>
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  Decisión automatizada
                </h4>
                <p className="text-gray-400 text-sm">
                  Motor de reglas configurable según políticas de riesgo.
                </p>
              </div>
            </div>

          </div>

          {/* DERECHA - IMAGEN */}
          <div className="relative">

            {/* glow */}
            <div className="absolute inset-0 bg-cyan-400/10 blur-2xl rounded-3xl"></div>

            {/* frame tipo app */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">

              <img
                src="/dashboard.jpg"
                alt="Plataforma Credex"
                className="rounded-2xl w-full"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}