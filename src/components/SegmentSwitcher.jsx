import { useState } from "react";
import { motion } from "framer-motion";
import { Car, CreditCard, Landmark, Building2 } from "lucide-react";

export default function SegmentSwitcher() {

  const [segment, setSegment] = useState("automotriz");

  const icons = {
    automotriz: Car,
    fintech: CreditCard,
    financiero: Landmark,
    b2b: Building2
  };

  const labels = {
    automotriz: "Automotriz",
    fintech: "Fintech",
    financiero: "Financiero",
    b2b: "B2B"
  };

  const content = {
    automotriz: {
      title: "Acelere la aprobación de financiamiento",
      desc: "Evalúe clientes en el punto de venta en segundos y cierre más operaciones sin aumentar riesgo."
    },
    fintech: {
      title: "Automatice decisiones crediticias en su fintech",
      desc: "Scoring en tiempo real, integración con burós y políticas de riesgo configurables en una sola plataforma."
    },
    financiero: {
      title: "Optimice la gestión de riesgo crediticio",
      desc: "Otorgue crédito con mayor precisión, menor riesgo y control total de sus políticas."
    },
    b2b: {
      title: "Evalúe clientes comerciales en segundos",
      desc: "Tome decisiones informadas antes de vender y reduzca incobrables desde el primer contacto."
    }
  };

  const Icon = icons[segment] || Car;

  return (
    <section className="py-24 bg-[#F8FAFC]">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITULO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Soluciones por industria
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Adaptamos la plataforma a distintos modelos de negocio y procesos crediticios.
          </p>
        </div>

        {/* SELECTOR */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {Object.keys(content).map((key) => {
            const ButtonIcon = icons[key] || Car;

            return (
              <button
                key={key}
                onClick={() => setSegment(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border
                ${
                  segment === key
                    ? "bg-primary-500 text-white border-primary-500 shadow-md scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary-400"
                }`}
              >
                <ButtonIcon className="w-5 h-5" />
                {labels[key]}
              </button>
            );
          })}

        </div>

        {/* CONTENIDO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl shadow-xl p-10 max-w-4xl mx-auto text-center relative overflow-hidden"
        >

          {/* FONDO */}
          <div className="absolute inset-0 bg-primary-100/30 blur-2xl opacity-40"></div>

          <div className="relative">

            {/* ICONO */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary-100">
                <Icon className="w-8 h-8 text-primary-500" />
              </div>
            </div>

            {/* TITULO */}
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              {content[segment]?.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              {content[segment]?.desc}
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}