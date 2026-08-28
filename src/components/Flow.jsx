import { motion } from "framer-motion";

export default function Flow() {

  const steps = [
    {
      title: "Ingreso de RUT",
      desc: "Captura del cliente en segundos"
    },
    {
      title: "Consulta de datos",
      desc: "Fuentes financieras y regulatorias"
    },
    {
      title: "Scoring automático",
      desc: "Modelo de riesgo y reglas configurables"
    },
    {
      title: "Decisión inmediata",
      desc: "Aprobación o rechazo en tiempo real"
    }
  ];

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <div className="mb-20">

          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            Cómo evaluamos un cliente en segundos
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Desde el ingreso del RUT hasta la decisión final, todo ocurre en tiempo real.
          </p>

        </div>

        {/* FLOW COMPLETO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20"
        >

          {steps.map((step, i) => (

            <div key={i} className="flex items-center">

              {/* CARD */}
              <div className="group relative bg-gray-50 border border-gray-100 p-8 rounded-3xl w-72 shadow-sm hover:shadow-xl transition-all duration-300">

                {/* STEP NUMBER */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-400 text-black text-sm font-semibold mb-4">
                  {i + 1}
                </div>

                {/* TITLE */}
                <h3 className="font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-500">
                  {step.desc}
                </p>

                {/* LINEA HOVER */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></div>

              </div>

              {/* CONECTOR */}
              {i < steps.length - 1 && (
                <div className="hidden md:block mx-6 w-10 h-[2px] bg-gray-300"></div>
              )}

            </div>

          ))}

        </motion.div>

        {/* BLOQUE FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0B1F3A] to-[#123A63] text-white py-12 px-8 rounded-3xl max-w-4xl mx-auto shadow-xl"
        >

          <h3 className="text-2xl font-semibold mb-3">
            Todo ocurre en segundos
          </h3>

          <p className="opacity-80">
            Sin recopilar antecedentes a mano, sin fricción y con registro de cada decisión.
          </p>

        </motion.div>

      </div>

    </section>
  );
}