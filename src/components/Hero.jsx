import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import ClientifyForm from "./ClientifyForm";
import { getCurrentMarket } from "../config/markets";
import { getCommercialCopy } from "../config/commercialCopy";

const REGIONAL_FORM_MARKETS = new Set(["PE", "CO", "AR"]);

export default function Hero() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const content = getCommercialCopy(market.code).hero;

  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrimaryCta = () => {
    if (REGIONAL_FORM_MARKETS.has(market.code)) {
      scrollToContact();
      return;
    }

    setOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 bg-[#0B1F3A] text-white px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#0F2A4D] to-[#0B1F3A]" />
      <div className="absolute w-[900px] h-[900px] bg-primary-500/10 blur-3xl rounded-full top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-4">{content.eyebrow}</p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            {content.title} <br />
            <span className="text-primary-400">{content.highlight}</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">{content.description}</p>

          <div className="flex flex-wrap gap-4 items-center">
            <button onClick={handlePrimaryCta} className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 hover:scale-105 transition shadow-lg">
              {content.primaryCta}
            </button>
            {content.secondaryCta && (
              <button onClick={scrollToServices} className="border border-primary-400 text-primary-400 px-8 py-4 rounded-xl hover:bg-primary-500 hover:text-white transition">
                {content.secondaryCta}
              </button>
            )}
          </div>

          <p className="text-sm text-gray-400 mt-4">{content.microcopy}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute inset-0 bg-primary-500/10 blur-2xl rounded-3xl" />
          <picture>
            <source srcSet="/dashboard.jpg" type="image/jpg" />
            <img src="/dashboard.jpg" alt={market.isChile ? "Soluciones Credex para evaluación y decisión crediticia" : "Soluciones Credex para evaluación y riesgo"} className="relative rounded-2xl shadow-2xl border border-white/10" loading="eager" />
          </picture>
        </motion.div>
      </div>

      {!REGIONAL_FORM_MARKETS.has(market.code) && (
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <ClientifyForm marketCode={market.code} title={content.primaryCta} />
        </Modal>
      )}
    </section>
  );
}
