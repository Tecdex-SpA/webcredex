import { motion } from "framer-motion";

export function TestimonialTop() {
  return (
    <section className="bg-white py-16 border-b">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >

        <p className="text-lg italic text-gray-700 mb-8">
          “Credex nos permitió estandarizar nuestras evaluaciones y tomar decisiones
          mucho más rápidas y consistentes. Hoy aprobamos más operaciones con mejor
          control de riesgo.”
        </p>

        <div className="flex items-center justify-center gap-5 group">

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-400 blur-xl opacity-0 group-hover:opacity-30 transition"></div>

            <img
              src="/aviva.png"
              alt="Aviva Barouh"
              className="relative w-24 h-24 rounded-full object-cover shadow-xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="text-left">
            <div className="font-semibold text-lg">Aviva Barouh</div>
            <div className="text-sm text-gray-500">Jefa de Créditos</div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}


export function TestimonialBottom() {
  return (
    <section className="bg-[#1C2543] text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >

        <p className="text-xl italic mb-10 leading-relaxed">
          “La integración con Credex fue mucho más simple y rápida de lo que esperábamos.
          Hoy evaluamos crédito dentro del flujo de venta, reduciendo tiempos y mejorando
          la eficiencia operativa.”
        </p>

        <div className="flex items-center justify-center gap-6 group">

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-500 blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

            <img
              src="/alfonso.png"
              alt="Alfonso Mena"
              className="relative w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="text-left">
            <div className="font-semibold text-lg">Alfonso Mena</div>
            <div className="text-sm opacity-70">Gerente de Operaciones</div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}