import { motion } from "framer-motion";
import { ShieldCheck, FileCheck } from "lucide-react";

export default function Security() {

  /**
   * Texto final de 58_TEXTOS_FINALES_PR3B.md, sobre las respuestas de Andres
   * del 2026-08-28.
   *
   * CRDX-C05: sale "encriptacion avanzada". El adjetivo no significa nada y no
   * se puede defender; el hecho si.
   *
   * CRDX-C06: el claim regulatorio anterior no era verificable. Una auditoria de
   * cliente APROBADA si lo es. El cliente va ANONIMIZADO: no se nombra sin
   * autorizacion escrita, y no se publica conformidad internacional.
   *
   * CRDX-C07: el bloque de disponibilidad se elimina (opcion A del doc 58,
   * confirmada por Mario). Las cifras de uptime y tiempo de respuesta son reales
   * pero solo aplican a quien contrata SLA aparte: publicarlas en la home las
   * volveria una promesa para todos. Ese dato va en la propuesta comercial.
   */
  const items = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-500" />,
      title: "Protección de datos",
      desc: "La información se cifra en tránsito y en reposo."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-primary-500" />,
      title: "Auditado por nuestros clientes",
      desc: "Hemos aprobado las auditorías de seguridad de nuestros clientes, incluida una financiera internacional que aplica estándares de Estados Unidos."
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
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
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