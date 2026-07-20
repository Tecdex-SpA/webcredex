const GLOBAL_COPY = {
  navigation: { solutions: "Soluciones", contact: "Contacto", clientAccess: "Acceso para clientes" },
  hero: {
    eyebrow: "Credex Internacional",
    title: "Tecnología para evaluar, integrar",
    highlight: "y automatizar decisiones",
    description: "Desarrollamos soluciones de inteligencia artificial, motores de evaluación configurables e integraciones para empresas que buscan operar con mayor eficiencia y trazabilidad.",
    primaryCta: "Solicita una reunión",
    secondaryCta: "Conoce las soluciones",
    microcopy: "Soluciones tecnológicas adaptadas a la operación de cada empresa."
  },
  services: {
    title: "Soluciones tecnológicas para empresas",
    description: "Capacidades de inteligencia artificial, evaluación e integración adaptadas a cada organización y mercado.",
    items: [
      ["Desarrollo de inteligencia artificial", "Diseñamos soluciones de IA para automatizar procesos, analizar información y apoyar decisiones operativas y comerciales."],
      ["Motor de evaluación", "Implementamos motores configurables de reglas, puntaje y decisión, con trazabilidad y gestión de excepciones."],
      ["Integraciones", "Conectamos plataformas y procesos mediante APIs, webhooks, archivos y flujos automatizados de intercambio de información."]
    ]
  },
  contact: {
    title: "Solicita una demostración",
    description: "Conoce cómo nuestras soluciones pueden adaptarse a los procesos de tu organización.",
    cta: "Solicita una demostración personalizada",
    microcopy: "Coordinamos una presentación enfocada en las necesidades de tu empresa."
  },
  closing: {
    title: "Soluciones adaptadas a cada mercado",
    description: "Credex ofrece internacionalmente desarrollo de inteligencia artificial, motores de evaluación configurables e integraciones tecnológicas. La disponibilidad y el alcance de cada implementación se definen según las necesidades operativas de cada organización."
  },
  seo: {
    title: "Inteligencia artificial, evaluación e integraciones | Credex Internacional",
    description: "Credex desarrolla soluciones de inteligencia artificial, motores de evaluación configurables e integraciones para empresas."
  }
};

export const COMMERCIAL_COPY = {
  GLOBAL: GLOBAL_COPY,
  CL: {
    ...GLOBAL_COPY,
    navigation: { solutions: "Plataforma", contact: "Contacto", clientAccess: "Acceso clientes" },
    hero: {
      eyebrow: "Credex Chile",
      title: "Evite incobrables y apruebe más clientes",
      highlight: "con evaluación crediticia en segundos",
      description: "Plataforma de evaluación crediticia para empresas que permite analizar riesgo financiero, automatizar decisiones y vender con mayor seguridad.",
      primaryCta: "Evaluar cliente ahora",
      secondaryCta: "Ver plataforma",
      microcopy: "Evalúe clientes en segundos y reduzca incobrables."
    },
    services: {
      title: "Todo lo que necesita para evaluar crédito",
      description: "Una plataforma diseñada para automatizar decisiones, reducir riesgo y escalar su operación.",
      items: [
        ["Motor de decisión", "Configure reglas, políticas y automatice decisiones crediticias en tiempo real."],
        ["Servicios de información", "Integre información financiera y regulatoria para fortalecer sus procesos de evaluación."],
        ["Gestión de solicitudes", "Administre el flujo completo de evaluación, aprobación y seguimiento."],
        ["Analytics y monitoreo", "Controle desempeño, riesgo y KPI para optimizar su operación."]
      ]
    },
    contact: {
      title: "Agende una demostración en vivo",
      description: "Acceda al formulario y conozca cómo Credex evalúa un cliente en segundos.",
      cta: "Agendar demostración personalizada",
      microcopy: "Coordinamos una demostración adaptada a su negocio."
    },
    seo: {
      title: "Evaluación crediticia para empresas en Chile | Credex",
      description: "Plataforma de evaluación crediticia para empresas en Chile. Automatice decisiones, reduzca incobrables y aumente la aprobación."
    }
  },
  PE: {
    ...GLOBAL_COPY,
    hero: { ...GLOBAL_COPY.hero, eyebrow: "Credex Perú", title: "Automatiza tus evaluaciones", highlight: "y toma decisiones con mayor agilidad", description: "Implementamos inteligencia artificial, motores de evaluación e integraciones adaptadas a los procesos de tu empresa.", primaryCta: "Solicita una demostración", secondaryCta: "Conoce las soluciones" },
    services: { ...GLOBAL_COPY.services, description: "Soluciones de inteligencia artificial, evaluación e integración adaptadas a los procesos de tu organización." },
    contact: { ...GLOBAL_COPY.contact, title: "Solicita una demostración para tu empresa" },
    seo: { ...GLOBAL_COPY.seo, title: "Inteligencia artificial y motores de evaluación en Perú | Credex" }
  },
  CO: {
    ...GLOBAL_COPY,
    hero: { ...GLOBAL_COPY.hero, eyebrow: "Credex Colombia", title: "Optimiza tus procesos de evaluación", highlight: "y decide con mayor confianza", description: "Conectamos tus procesos con inteligencia artificial, motores de evaluación e integraciones empresariales.", primaryCta: "Agenda una conversación", secondaryCta: "Conoce las soluciones" },
    services: { ...GLOBAL_COPY.services, description: "Soluciones empresariales para conectar procesos, automatizar evaluaciones y tomar decisiones con mayor confianza." },
    contact: { ...GLOBAL_COPY.contact, title: "Agenda una conversación con nuestro equipo", cta: "Agendar conversación" },
    seo: { ...GLOBAL_COPY.seo, title: "Inteligencia artificial y motores de evaluación en Colombia | Credex" }
  },
  AR: {
    ...GLOBAL_COPY,
    navigation: { solutions: "Soluciones", contact: "Contacto", clientAccess: "Acceso para clientes" },
    hero: { ...GLOBAL_COPY.hero, eyebrow: "Credex Argentina", title: "Automatizá tus evaluaciones", highlight: "y tomá decisiones con mayor agilidad", description: "Implementamos inteligencia artificial, motores de evaluación e integraciones adaptadas a la operación de tu empresa.", primaryCta: "Solicitá una demostración", secondaryCta: "Conocé las soluciones", microcopy: "Soluciones tecnológicas adaptadas a la realidad de tu empresa." },
    services: {
      ...GLOBAL_COPY.services,
      title: "Soluciones tecnológicas para tu empresa",
      description: "Integrá inteligencia artificial, evaluación e interoperabilidad sin alterar la lógica central de tu operación.",
      items: [
        ["Desarrollo de inteligencia artificial", "Diseñamos soluciones de IA para automatizar procesos, analizar información y mejorar decisiones operativas y comerciales."],
        ["Motor de evaluación", "Implementamos motores configurables de reglas, puntaje y decisión, con trazabilidad y gestión de excepciones."],
        ["Integraciones", "Conectamos plataformas y procesos mediante APIs, webhooks, archivos y flujos automatizados de intercambio de información."]
      ]
    },
    contact: { ...GLOBAL_COPY.contact, title: "Solicitá una demostración", description: "Conocé cómo nuestras soluciones pueden adaptarse a los procesos de tu organización.", cta: "Solicitá una demostración personalizada", microcopy: "Coordinamos una presentación enfocada en las necesidades de tu empresa." },
    closing: { ...GLOBAL_COPY.closing, title: "Soluciones adaptadas a tu mercado" },
    seo: { ...GLOBAL_COPY.seo, title: "Inteligencia artificial y motores de evaluación en Argentina | Credex" }
  }
};

export function getCommercialCopy(marketCode) {
  return COMMERCIAL_COPY[marketCode] || COMMERCIAL_COPY.GLOBAL;
}
