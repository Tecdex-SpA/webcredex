import { motion } from "framer-motion";
import { BrainCircuit, PlugZap, SlidersHorizontal, Database, Folder, BarChart3, Zap } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getCurrentMarket } from "../config/markets";

export default function Services() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);

  const internationalItems = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-orange-500" />,
      title: "Desarrollo de inteligencia artificial",
      desc: "Diseñamos soluciones de IA para automatizar procesos, analizar información y apoyar decisiones operativas y comerciales.",
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-orange-500" />,
      title: "Motor de evaluación",
      desc: "Implementamos motores configurables de reglas, puntaje y decisión, con trazabilidad y gestión de excepciones.",
    },
    {
      icon: <PlugZap className="w-6 h-6 text-orange-500" />,
      title: "Integraciones",
      desc: "Conectamos plataformas y procesos mediante APIs, webhooks, archivos y flujos automatizados de intercambio de información.",
    },
  ];

  const chileItems = [
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Motor de decisión",
      desc: "Configure reglas, políticas y automatice decisiones crediticias en tiempo real.",
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: "Servicios de información",
      desc: "Integre información financiera y regulatoria para fortalecer sus procesos de evaluación.",
    },
    {
      icon: <Folder className="w-6 h-6 text-orange-500" />,
      title: "Gestión de solicitudes",
      desc: "Administre el flujo completo de evaluación, aprobación y seguimiento.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: "Analytics y monitoreo",
      desc: "Controle desempeño, riesgo y KPIs para optimizar su operación.",
    },
  ];

  const items = market.isChile ? chileItems : internationalItems;

  return (
    <section id="servicios" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            {market.isChile
              ? "Todo lo que necesita para evaluar crédito"
              : "Soluciones tecnológicas para empresas"}
          </h2>
          <p className="text-gray-500 text-lg">
            {market.isChile
              ? "Una plataforma diseñada para automatizar decisiones, reducir riesgo y escalar su operación."
              : "Capacidades de inteligencia artificial, evaluación e integración adaptadas a cada organización y mercado."}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`grid gap-8 ${market.isChile ? "md:grid-cols-2" : "md:grid-cols-3"}`}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 mb-6">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-orange-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
