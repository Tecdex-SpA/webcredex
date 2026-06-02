import { motion } from "framer-motion";
import { Zap, Database, Folder, BarChart3 } from "lucide-react";

export default function Services() {

  const items = [
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Motor de decisión",
      desc: "Configure reglas, políticas y automatice decisiones crediticias en tiempo real."
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: "Servicios de información",
      desc: "Integre burós, fuentes regulatorias y datos financieros en segundos."
    },
    {
      icon: <Folder className="w-6 h-6 text-orange-500" />,
      title: "Gestión de solicitudes",
      desc: "Administre el flujo completo de evaluación, aprobación y seguimiento."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: "Analytics y monitoreo",
      desc: "Controle desempeño, riesgo y KPIs para optimizar su operación."
    }
  ];

  return (
    <section id="servicios" className="py-28 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Todo lo que necesitas para evaluar crédito
          </h2>

          <p className="text-gray-500 text-lg">
            Una plataforma diseñada para automatizar decisiones, reducir riesgo y escalar tu operación.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >

          {items.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 mb-6">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></div>

            </div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}