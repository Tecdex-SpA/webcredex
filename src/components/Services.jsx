import { motion } from "framer-motion";
import { BrainCircuit, PlugZap, SlidersHorizontal, Database, Folder, BarChart3, Zap } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getCurrentMarket } from "../config/markets";
import { getCommercialCopy } from "../config/commercialCopy";

const INTERNATIONAL_ICONS = [BrainCircuit, SlidersHorizontal, PlugZap];
const CHILE_ICONS = [Zap, Database, Folder, BarChart3];

export default function Services() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const content = getCommercialCopy(market.code).services;
  const icons = market.isChile ? CHILE_ICONS : INTERNATIONAL_ICONS;

  return (
    <section id="servicios" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">{content.title}</h2>
          <p className="text-gray-500 text-lg">{content.description}</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className={`grid gap-8 ${market.isChile ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {content.items.map(([title, desc], index) => {
            const Icon = icons[index] || BrainCircuit;
            return (
              <div key={title} className="group relative p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 mb-6">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-orange-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
