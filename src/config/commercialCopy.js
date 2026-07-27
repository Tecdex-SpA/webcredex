const GLOBAL_COPY = {
  navigation: {
    solutions: "Soluciones",
    contact: "Contacto",
    clientAccess: "Acceso para clientes",
  },
  hero: {
    eyebrow: "Credex Internacional",
    title: "Decisiones financieras más precisas",
    highlight: "con modelamiento, motores e integraciones",
    description:
      "Diseñamos soluciones para estructurar, automatizar y mejorar procesos de evaluación, riesgo y decisión financiera.",
    primaryCta: "Solicita una reunión",
    secondaryCta: "Conoce las soluciones",
    microcopy: "Cada implementación se define según el proceso, los datos y los objetivos del cliente.",
  },
  services: {
    title: "Soluciones para evaluación y riesgo",
    description:
      "Credex combina modelamiento, automatización e integración tecnológica dentro de procesos financieros y crediticios.",
    items: [
      [
        "Modelamiento y analítica",
        "Estructuramos criterios, variables e indicadores para evaluar riesgo y respaldar decisiones financieras.",
      ],
      [
        "Motores de evaluación",
        "Implementamos reglas, políticas y flujos de decisión configurados para cada operación.",
      ],
      [
        "Integraciones",
        "Conectamos fuentes de información y sistemas para ejecutar evaluaciones dentro del flujo operativo del cliente.",
      ],
    ],
  },
  contact: {
    title: "Solicita una reunión",
    description:
      "Cuéntanos qué proceso financiero o crediticio necesitas mejorar y evaluaremos el alcance de una solución.",
    cta: "Solicita una reunión",
    microcopy: "La viabilidad de cada proyecto se determina mediante una evaluación técnica y comercial.",
    scopeNote:
      "Fuera de Chile, Credex ofrece modelamiento y analítica, motores de evaluación e integraciones para procesos financieros y crediticios.",
  },
  closing: {
    title: "Soluciones definidas según cada operación",
    description:
      "El alcance se establece considerando el proceso, las fuentes disponibles, la calidad de los datos y los resultados esperados.",
  },
  seo: {
    title: "Motores de evaluación, scoring e integraciones | Credex",
    description:
      "Soluciones de modelamiento, scoring, motores de evaluación e integraciones para automatizar decisiones financieras, crediticias y de riesgo.",
    serviceType: "Modelamiento, scoring, motores de evaluación e integraciones financieras",
  },
};

export const COMMERCIAL_COPY = {
  GLOBAL: GLOBAL_COPY,
  CL: {
    ...GLOBAL_COPY,
    navigation: {
      solutions: "Soluciones",
      contact: "Contacto",
      clientAccess: "Acceso clientes",
    },
    hero: {
      eyebrow: "Credex Chile",
      title: "Evalúe mejor y reduzca el riesgo",
      highlight: "con decisiones crediticias automatizadas",
      description:
        "Credex integra información, reglas y analítica para evaluar clientes, automatizar decisiones y operar con mayor seguridad.",
      primaryCta: "Solicitar demostración",
      secondaryCta: null,
      microcopy: "Conozca cómo Credex se adapta a sus políticas y procesos de evaluación.",
    },
    services: {
      title: "Soluciones para gestionar el crédito",
      description:
        "Capacidades complementarias para evaluar, decidir y monitorear sin repetir tareas ni fragmentar la operación.",
      items: [
        [
          "Motor de decisión",
          "Configure reglas, políticas y criterios para automatizar decisiones crediticias con trazabilidad.",
        ],
        [
          "Información e integraciones",
          "Incorpore antecedentes financieros, regulatorios y operativos dentro del flujo de evaluación.",
        ],
        [
          "Gestión de solicitudes",
          "Administre la evaluación, aprobación, derivación y seguimiento desde un proceso centralizado.",
        ],
        [
          "Analítica y monitoreo",
          "Mida aprobación, riesgo y desempeño para revisar políticas y mejorar resultados.",
        ],
      ],
    },
    contact: {
      title: "Agende una demostración",
      description:
        "Revise cómo Credex puede apoyar su proceso de evaluación y decisión crediticia.",
      cta: "Agendar demostración personalizada",
      microcopy: "La demostración se adapta a su operación y objetivos.",
      scopeNote: null,
    },
    seo: {
      title: "Software de evaluación crediticia y riesgo en Chile | Credex",
      description:
        "Evalúe clientes, automatice decisiones y gestione riesgo crediticio con motores configurables, información financiera, analítica y trazabilidad.",
      serviceType: "Software de evaluación y decisión crediticia para empresas",
    },
  },
  PE: {
    ...GLOBAL_COPY,
    hero: {
      ...GLOBAL_COPY.hero,
      eyebrow: "Credex Perú",
      title: "Soluciones para evaluación y riesgo",
      highlight: "adaptadas a los procesos de tu empresa",
      description:
        "Implementamos modelamiento, motores de evaluación e integraciones para procesos financieros y crediticios en Perú.",
      primaryCta: "Solicita una reunión",
      secondaryCta: "Conoce las soluciones",
    },
    contact: {
      ...GLOBAL_COPY.contact,
      title: "Solicita una reunión",
    },
    seo: {
      title: "Motores de evaluación y scoring en Perú | Credex",
      description:
        "Modelamiento, scoring, motores de evaluación e integraciones para automatizar procesos financieros, crediticios y de riesgo en Perú.",
      serviceType: "Modelamiento, scoring y motores de evaluación financiera en Perú",
    },
  },
  CO: {
    ...GLOBAL_COPY,
    hero: {
      ...GLOBAL_COPY.hero,
      eyebrow: "Credex Colombia",
      title: "Soluciones para evaluación y riesgo",
      highlight: "para las necesidades de tu empresa",
      description:
        "Implementamos modelamiento, motores de evaluación e integraciones para procesos financieros y crediticios en Colombia.",
      primaryCta: "Conversemos sobre tu necesidad",
      secondaryCta: "Conoce las soluciones",
    },
    contact: {
      ...GLOBAL_COPY.contact,
      title: "Conversemos sobre tu necesidad",
      cta: "Solicitar contacto",
    },
    seo: {
      title: "Motores de evaluación y scoring en Colombia | Credex",
      description:
        "Modelamiento, scoring, motores de evaluación e integraciones para automatizar decisiones financieras, crediticias y de riesgo en Colombia.",
      serviceType: "Modelamiento, scoring y motores de evaluación financiera en Colombia",
    },
  },
  AR: {
    ...GLOBAL_COPY,
    navigation: {
      solutions: "Soluciones",
      contact: "Contacto",
      clientAccess: "Acceso para clientes",
    },
    hero: {
      ...GLOBAL_COPY.hero,
      eyebrow: "Credex Argentina",
      title: "Soluciones para evaluación y riesgo",
      highlight: "adaptadas a la operación de tu empresa",
      description:
        "Implementamos modelamiento, motores de evaluación e integraciones para procesos financieros y crediticios en Argentina.",
      primaryCta: "Contanos qué necesitás resolver",
      secondaryCta: "Conocé las soluciones",
      microcopy: "Cada implementación se define según el proceso, los datos y los objetivos de tu empresa.",
    },
    services: {
      ...GLOBAL_COPY.services,
      title: "Soluciones para evaluación y riesgo",
      description:
        "La oferta de Credex en Argentina se concentra en modelamiento, motores de evaluación e integraciones.",
    },
    contact: {
      ...GLOBAL_COPY.contact,
      title: "Contanos qué necesitás resolver",
      description:
        "Contanos qué proceso financiero o crediticio necesitás mejorar y evaluaremos el alcance de una solución.",
      cta: "Solicitar contacto",
      microcopy:
        "La viabilidad de cada proyecto se define después de una evaluación técnica y comercial.",
    },
    closing: {
      ...GLOBAL_COPY.closing,
      title: "Soluciones definidas según cada operación",
    },
    seo: {
      title: "Motores de evaluación y scoring en Argentina | Credex",
      description:
        "Modelamiento, scoring, motores de evaluación e integraciones para automatizar procesos financieros, crediticios y de riesgo en Argentina.",
      serviceType: "Modelamiento, scoring y motores de evaluación financiera en Argentina",
    },
  },
};

export function getCommercialCopy(marketCode) {
  return COMMERCIAL_COPY[marketCode] || COMMERCIAL_COPY.GLOBAL;
}
