import { motion } from "framer-motion";
import { Database, Clock, TrendingUp, AlertTriangle } from "lucide-react";

export default function Problem() {
  const items = [
    {
      icon: <Database className="w-6 h-6 text-primary-400" />,
      title: "Información dispersa",
      desc: "Datos en múltiples sistemas sin una visión consolidada del cliente."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-400" />,
      title: "Procesos manuales",
      desc: "Evaluaciones lentas, dependientes de múltiples revisiones humanas."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-400" />,
      title: "Presión comercial",
      desc: "Necesidad de aprobar rápido sin suficiente información para decidir."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-primary-400" />,
      title: "Riesgo financiero",
      desc: "Exposición a incobrables por falta de control en la evaluación."
    }
  ];

  return (
    <section id="problema" className="py-28 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-primary-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            El desafío de evaluar crédito hoy
          </h2>

          <p className="text-white/70 text-lg">
            Procesos fragmentados, decisiones lentas y alto riesgo financiero afectan el crecimiento de las empresas.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-white/10 border border-white/10 hover:bg-white/15 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-500/15 mb-6">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-3 text-white">
                {item.title}
              </h3>

              <p className="text-white/65 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
