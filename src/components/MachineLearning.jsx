import { Brain, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getCurrentMarket } from "../config/markets";

const INTERNATIONAL_CONTENT = {
  GLOBAL: {
    title: "Inteligencia artificial aplicada a procesos empresariales",
    intro: "Diseñamos soluciones de IA para automatizar tareas, analizar información y fortalecer decisiones operativas y comerciales.",
    paragraphs: [
      "Credex desarrolla soluciones de inteligencia artificial adaptadas a los procesos, criterios y objetivos de cada organización.",
      "La tecnología puede apoyar clasificación, extracción y estructuración de información, recomendaciones y analítica predictiva.",
      "Cada implementación se diseña con trazabilidad, control operacional e integración con los sistemas existentes de la empresa."
    ],
    benefits: [
      ["Modelos adaptados", "Soluciones configuradas según el proceso y los objetivos del negocio."],
      ["Automatización", "Reduce tareas manuales y acelera flujos operativos recurrentes."],
      ["Control y trazabilidad", "Mantiene visibilidad sobre resultados, reglas y decisiones asistidas."],
      ["Integración empresarial", "Incorpora capacidades de IA dentro de plataformas y procesos existentes."]
    ],
    closing: "Inteligencia aplicada a necesidades operativas concretas."
  },
  PE: {
    title: "Inteligencia artificial para optimizar tus procesos",
    intro: "Implementamos soluciones de IA que ayudan a automatizar tareas, analizar información y agilizar decisiones empresariales.",
    paragraphs: [
      "Credex adapta cada solución a los procesos, criterios y objetivos de tu organización.",
      "La tecnología puede apoyar la clasificación, extracción y estructuración de información, además de recomendaciones y analítica predictiva.",
      "Cada implementación mantiene trazabilidad, control operativo e integración con los sistemas existentes de tu empresa."
    ],
    benefits: [
      ["Modelos adaptados", "Soluciones configuradas según los procesos y objetivos de tu empresa."],
      ["Automatización", "Reduce tareas manuales y agiliza flujos operativos recurrentes."],
      ["Control y trazabilidad", "Mantén visibilidad sobre resultados, reglas y decisiones asistidas."],
      ["Integración empresarial", "Incorpora capacidades de IA en tus plataformas y procesos existentes."]
    ],
    closing: "Tecnología aplicada a necesidades operativas concretas."
  },
  CO: {
    title: "Inteligencia artificial para decisiones más ágiles",
    intro: "Conecta tus procesos con soluciones de IA orientadas a automatizar tareas, analizar información y fortalecer la toma de decisiones.",
    paragraphs: [
      "Credex diseña soluciones de inteligencia artificial alineadas con los procesos y objetivos de tu organización.",
      "La tecnología puede apoyar la clasificación, extracción y estructuración de información, además de recomendaciones y analítica predictiva.",
      "Cada implementación conserva trazabilidad, control operativo e integración con los sistemas actuales de tu empresa."
    ],
    benefits: [
      ["Modelos adaptados", "Soluciones configuradas según los procesos y objetivos de tu negocio."],
      ["Automatización", "Reduce tareas manuales y mejora la agilidad de los flujos operativos."],
      ["Control y trazabilidad", "Conserva visibilidad sobre resultados, reglas y decisiones asistidas."],
      ["Integración empresarial", "Conecta capacidades de IA con tus plataformas y procesos existentes."]
    ],
    closing: "Inteligencia aplicada para operar con mayor confianza."
  },
  AR: {
    title: "Inteligencia artificial para potenciar tus procesos",
    intro: "Implementá soluciones de IA para automatizar tareas, analizar información y mejorar decisiones operativas y comerciales.",
    paragraphs: [
      "Credex desarrolla soluciones de inteligencia artificial adaptadas a los procesos, criterios y objetivos de tu organización.",
      "La tecnología puede ayudarte a clasificar, extraer y estructurar información, generar recomendaciones y aplicar analítica predictiva.",
      "Cada implementación mantiene trazabilidad, control operativo e integración con los sistemas existentes de tu empresa."
    ],
    benefits: [
      ["Modelos adaptados", "Configurá soluciones según los procesos y objetivos de tu negocio."],
      ["Automatización", "Reducí tareas manuales y acelerá flujos operativos recurrentes."],
      ["Control y trazabilidad", "Mantené visibilidad sobre resultados, reglas y decisiones asistidas."],
      ["Integración empresarial", "Incorporá capacidades de IA en tus plataformas y procesos existentes."]
    ],
    closing: "Aplicá inteligencia a necesidades operativas concretas."
  }
};

export default function MachineLearning() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);

  const content = market.isChile
    ? {
        title: "Evaluación crediticia con Machine Learning",
        intro: "Incorpore modelos predictivos que permiten identificar mejores clientes, reducir riesgo y aumentar la aprobación automática.",
        paragraphs: [
          "Credex integra modelos de Machine Learning entrenados con datos históricos para predecir el comportamiento de pago de sus clientes.",
          "Esta tecnología permite analizar miles de variables y detectar patrones que no son visibles en modelos tradicionales ni en evaluaciones manuales.",
          "El resultado es una evaluación más precisa, rápida y escalable, que mejora la toma de decisiones sin reemplazar su modelo actual."
        ],
        benefits: [
          ["Modelo predictivo", "Predice el comportamiento de pago utilizando datos históricos reales."],
          ["Más aprobación automática", "Convierte evaluaciones manuales en decisiones automáticas."],
          ["Control de riesgo", "Mejora la precisión manteniendo políticas de crédito seguras."],
          ["Decisiones en tiempo real", "Evalúa clientes en segundos sin intervención manual."]
        ],
        closing: "Potencie su operación con una segunda capa de decisión inteligente."
      }
    : INTERNATIONAL_CONTENT[market.code] || INTERNATIONAL_CONTENT.GLOBAL;

  const icons = [Brain, TrendingUp, ShieldCheck, Zap];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">{content.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{content.intro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-600 mb-6 leading-relaxed last:mb-0">{paragraph}</p>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-orange-100/40 blur-2xl rounded-3xl" />
            <div className="relative bg-white border rounded-2xl shadow-lg p-6">
              <img src="/ml-dashboard.png" alt={market.isChile ? "Machine Learning aplicado a evaluación crediticia" : "Inteligencia artificial aplicada a procesos empresariales"} className="rounded-xl" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {content.benefits.map(([title, description], index) => {
            const Icon = icons[index];
            return (
              <div key={title} className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition">
                <Icon className="w-6 h-6 text-orange-500 mb-3" />
                <h3 className="font-semibold mb-2 text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-2xl font-semibold text-gray-900">{content.closing}</p>
        </div>
      </div>
    </section>
  );
}
