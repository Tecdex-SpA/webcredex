import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const getPlatformUrl = () => {
    if (typeof window === "undefined") {
      return "https://ww8.portalcredex.cl";
    }

    const host = window.location.hostname.toLowerCase();
    const savedCountry = localStorage.getItem("credex_country");

    if (host.includes("credexapp.com") || savedCountry === "PE") {
      return "https://wws.credexapp.com";
    }

    return "https://ww8.portalcredex.cl";
  };

  const openPlatform = () => {
    window.open(getPlatformUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 bg-[#0B1F3A] text-white px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#0F2A4D] to-[#0B1F3A]" />
      <div className="absolute w-[900px] h-[900px] bg-orange-500/10 blur-3xl rounded-full top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Evite incobrables y apruebe más clientes <br />
            <span className="text-orange-400">
              con evaluación crediticia en segundos
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Plataforma de evaluación crediticia para empresas que permite analizar riesgo financiero, automatizar decisiones y vender con mayor seguridad.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => setOpen(true)}
              className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition shadow-lg"
            >
              Evaluar cliente ahora
            </button>

            <button
              onClick={openPlatform}
              className="border border-orange-400 text-orange-400 px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition"
            >
              Ver plataforma
            </button>
          </div>

          {/* MICRO COPY */}
          <p className="text-sm text-gray-400 mt-4">
            Evalúe clientes en segundos y reduzca incobrables.
          </p>

          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Cada día sin control de riesgo aumenta la exposición financiera.
          </p>
        </motion.div>

        {/* MOCKUP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-3xl"></div>

          <picture>
            <source srcSet="/dashboard.jpg" type="image/jpg" />
            <img
              src="/dashboard.jpg"
              alt="Plataforma de evaluación crediticia para empresas"
              className="relative rounded-2xl shadow-2xl border border-white/10"
              loading="eager"
            />
          </picture>
        </motion.div>
      </div>

      {/* MODAL */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <iframe
          src="https://apps.clientify.net/forms/simpleembed/#/forms/embedform/279377/107027"
          className="w-full h-full border-0"
        />
      </Modal>
    </section>
  );
}