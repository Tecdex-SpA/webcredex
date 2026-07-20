import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import { getCurrentMarket } from "../config/markets";
import { getCommercialCopy } from "../config/commercialCopy";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const content = getCommercialCopy(market.code).hero;

  const openPlatform = () => {
    window.open(market.clientUrl, "_blank", "noopener,noreferrer");
  };

  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 bg-[#0B1F3A] text-white px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#0F2A4D] to-[#0B1F3A]" />
      <div className="absolute w-[900px] h-[900px] bg-orange-500/10 blur-3xl rounded-full top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">{content.eyebrow}</p>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            {content.title} <br />
            <span className="text-orange-400">{content.highlight}</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">{content.description}</p>

          <div className="flex flex-wrap gap-4 items-center">
            <button onClick={() => setOpen(true)} className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition shadow-lg">
              {content.primaryCta}
            </button>
            <button onClick={market.isChile ? openPlatform : scrollToServices} className="border border-orange-400 text-orange-400 px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition">
              {content.secondaryCta}
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-4">{content.microcopy}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-3xl" />
          <picture>
            <source srcSet="/dashboard.jpg" type="image/jpg" />
            <img src="/dashboard.jpg" alt={market.isChile ? "Plataforma de evaluación crediticia para empresas" : "Soluciones tecnológicas Credex para empresas"} className="relative rounded-2xl shadow-2xl border border-white/10" loading="eager" />
          </picture>
        </motion.div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <iframe src="https://apps.clientify.net/forms/simpleembed/#/forms/embedform/279377/107027" title={content.primaryCta} className="w-full h-full border-0" />
      </Modal>
    </section>
  );
}
