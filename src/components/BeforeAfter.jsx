import { motion } from "framer-motion";

export default function BeforeAfter() {

  const before = [
    "Evaluación manual y lenta",
    "Información en múltiples sistemas",
    "Decisiones inconsistentes",
    "Alto riesgo de incobrables"
  ];

  const after = [
    "Evaluación automatizada de punta a punta",
    "Información consolidada en una sola vista",
    "Decisiones en segundos",
    "Criterios de riesgo aplicados de forma consistente"
  ];

  return (
    <section className="py-32 bg-[#0B1F3A] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-red-500/10 blur-3xl rounded-full top-0 left-1/3"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-400/10 blur-3xl rounded-full bottom-0 right-1/3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            De procesos manuales <br />
            a decisiones inteligentes
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transforme la forma en que evalúa clientes y tome decisiones con velocidad y control.
          </p>

        </div>

        {/* BLOQUE PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-stretch"
        >

          {/* ❌ BEFORE */}
          <div className="relative p-10 rounded-3xl bg-white/5 border border-red-400/20 backdrop-blur-xl">

            {/* título */}
            <h3 className="text-xl font-semibold mb-8 text-red-400">
              Sin Credex
            </h3>

            <ul className="space-y-5 text-gray-300">

              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-400 text-lg">✕</span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>

          </div>

          {/* ✅ AFTER */}
          <div className="relative p-10 rounded-3xl bg-white/10 border border-cyan-400/30 backdrop-blur-xl shadow-2xl">

            {/* glow */}
            <div className="absolute inset-0 bg-cyan-400/10 blur-2xl rounded-3xl"></div>

            <div className="relative">

              {/* título */}
              <h3 className="text-xl font-semibold mb-8 text-cyan-400">
                Con Credex
              </h3>

              <ul className="space-y-5 text-white font-medium">

                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-cyan-400 text-lg">✓</span>
                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}