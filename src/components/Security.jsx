import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Server } from "lucide-react";

export default function Security() {

  const items = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-500" />,
      title: "Protección de datos",
      desc: "Información resguardada bajo estándares de seguridad y encriptación avanzada."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-primary-500" />,
      title: "Cumplimiento normativo",
      desc: "Alineado con regulaciones financieras y mejores prácticas del mercado."
    },
    {
      icon: <Server className="w-6 h-6 text-primary-500" />,
      title: "Infraestructura confiable",
      desc: "Plataforma escalable, segura y disponible para operación continua."
    }
  ];

  return (
    <section className="py-28 bg-[#F8FAFC]">

      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-3xl mx-auto text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Seguridad y cumplimiento
          </h2>

          <p className="text-gray-500 text-lg">
            Controles de acceso, resguardo de la información y registro de cada consulta y decisión.
          </p>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >

          {items.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
            >

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-100 mb-6">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg mb-3 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
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