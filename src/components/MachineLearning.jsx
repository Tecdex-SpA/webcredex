import { Brain, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getCurrentMarket } from "../config/markets";

const INTERNATIONAL_CONTENT = {
  GLOBAL: {
    title: "De reglas a modelos predictivos",
    intro: "Evolucionamos procesos financieros y crediticios desde el modelamiento inicial hasta analítica avanzada y machine learning.",
    paragraphs: [
      "El punto de partida es entender el proceso, las variables disponibles, las políticas vigentes y los resultados que se necesitan mejorar.",
      "Luego estructuramos reglas, motores de evaluación e indicadores que permitan automatizar decisiones con trazabilidad.",
      "Cuando existe información histórica suficiente, es posible incorporar scoring, modelos predictivos y técnicas de machine learning para complementar la evaluación."
    ],
    benefits: [
      ["Modelamiento", "Define variables, criterios y resultados esperados antes de automatizar."],
      ["Motor de evaluación", "Ejecuta reglas y políticas de decisión dentro del flujo operativo."],
      ["Scoring y analítica", "Mide comportamiento, riesgo y desempeño para calibrar el proceso."],
      ["Machine learning", "Incorpora modelos predictivos cuando la calidad y volumen de datos lo permiten."]
    ],
    closing: "La tecnología se incorpora por etapas, según la madurez del proceso y la disponibilidad de datos."
  },
  PE: {
    title: "De reglas a modelos predictivos",
    intro: "Evolucionamos procesos financieros y crediticios desde el modelamiento hasta analítica avanzada y machine learning.",
    paragraphs: [
      "Partimos por comprender tu proceso, las variables disponibles, las políticas vigentes y los resultados que necesitas mejorar.",
      "Después estructuramos reglas, motores de evaluación e indicadores para automatizar decisiones con trazabilidad.",
      "Cuando existe información histórica suficiente, podemos incorporar scoring, modelos predictivos y machine learning como apoyo a la evaluación."
    ],
    benefits: [
      ["Modelamiento", "Define variables, criterios y resultados antes de automatizar."],
      ["Motor de evaluación", "Ejecuta reglas y políticas dentro del flujo de tu operación."],
      ["Scoring y analítica", "Mide comportamiento, riesgo y desempeño para calibrar decisiones."],
      ["Machine learning", "Incorpora modelos predictivos cuando los datos permiten desarrollarlos con confiabilidad."]
    ],
    closing: "Cada etapa se define según la madurez del proceso y la disponibilidad de datos."
  },
  CO: {
    title: "De reglas a modelos predictivos",
    intro: "Evolucionamos procesos financieros y crediticios desde el modelamiento hasta analítica avanzada y machine learning.",
    paragraphs: [
      "Partimos por comprender tu proceso, las variables disponibles, las políticas vigentes y los resultados que necesitas mejorar.",
      "Después estructuramos reglas, motores de evaluación e indicadores para automatizar decisiones con trazabilidad.",
      "Cuando existe información histórica suficiente, podemos incorporar scoring, modelos predictivos y machine learning como apoyo a la evaluación."
    ],
    benefits: [
      ["Modelamiento", "Define variables, criterios y resultados antes de automatizar."],
      ["Motor de evaluación", "Ejecuta reglas y políticas dentro del flujo de tu operación."],
      ["Scoring y analítica", "Mide comportamiento, riesgo y desempeño para calibrar decisiones."],
      ["Machine learning", "Incorpora modelos predictivos cuando los datos permiten desarrollarlos con confiabilidad."]
    ],
    closing: "Cada etapa se define según la madurez del proceso y la disponibilidad de datos."
  },
  AR: {
    title: "De reglas a modelos predictivos",
    intro: "Evolucionamos procesos financieros y crediticios desde el modelamiento hasta analítica avanzada y machine learning.",
    paragraphs: [
      "Partimos por comprender tu proceso, las variables disponibles, las políticas vigentes y los resultados que necesitás mejorar.",
      "Después estructuramos reglas, motores de evaluación e indicadores para automatizar decisiones con trazabilidad.",
      "Cuando existe información histórica suficiente, podemos incorporar scoring, modelos predictivos y machine learning como apoyo a la evaluación."
    ],
    benefits: [
      ["Modelamiento", "Definí variables, criterios y resultados antes de automatizar."],
      ["Motor de evaluación", "Ejecutá reglas y políticas dentro del flujo de tu operación."],
      ["Scoring y analítica", "Medí comportamiento, riesgo y desempeño para calibrar decisiones."],
      ["Machine learning", "Incorporá modelos predictivos cuando los datos permitan desarrollarlos con confiabilidad."]
    ],
    closing: "Cada etapa se define según la madurez del proceso y la disponibilidad de datos."
  }
};

export default function MachineLearning() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);

  const content = market.isChile
    ? {
        title: "Evolución de la decisión crediticia",
        intro: "Credex permite avanzar desde reglas de negocio hacia scoring, analítica y modelos predictivos, sin perder trazabilidad ni control.",
        paragraphs: [
          "El proceso comienza con el modelamiento de políticas, variables y criterios de evaluación utilizados por la organización.",
          "El motor de decisión automatiza esas políticas y genera información para monitorear aprobación, riesgo y comportamiento.",
          "Cuando existe información histórica suficiente y validada, se pueden incorporar scoring y machine learning para complementar la evaluación y mejorar la calibración."
        ],
        benefits: [
          ["Modelamiento", "Estructure políticas, variables y resultados esperados."],
          ["Motor de decisión", "Automatice reglas y flujos con trazabilidad."],
          ["Scoring y monitoreo", "Mida desempeño y ajuste criterios con evidencia."],
          ["Machine learning", "Incorpore modelos predictivos cuando los datos permitan un desarrollo confiable."]
        ],
        closing: "La evolución tecnológica se define según los datos, la operación y el nivel de madurez de cada cliente."
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
              <img src="/ml-dashboard.png" alt="Modelamiento, scoring y machine learning para decisiones financieras y crediticias" className="rounded-xl" loading="lazy" />
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
