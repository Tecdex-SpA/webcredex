const GLOBAL_COPY = {
  navigation: {
    solutions: "Soluciones",
    contact: "Contacto",
    clientAccess: "Acceso para clientes",
  },
  hero: {
    eyebrow: "Credex Internacional",
    title: "Tecnología para empresas",
    highlight: "con inteligencia artificial, evaluación e integraciones",
    description:
      "Desarrollamos soluciones de inteligencia artificial, motores de evaluación e integraciones para organizaciones que necesitan mejorar sus procesos.",
    primaryCta: "Solicita una reunión",
    secondaryCta: "Conoce las soluciones",
    microcopy: "Cada proyecto se define según las necesidades de la organización.",
  },
  services: {
    title: "Nuestras líneas de servicio",
    description:
      "La oferta internacional de Credex se concentra en tres líneas de trabajo.",
    items: [
      [
        "Desarrollo de inteligencia artificial",
        "Desarrollamos soluciones de inteligencia artificial de acuerdo con las necesidades de cada organización.",
      ],
      [
        "Motor de evaluación",
        "Implementamos motores de evaluación configurados según los requerimientos de cada proyecto.",
      ],
      [
        "Integraciones",
        "Desarrollamos integraciones entre sistemas de acuerdo con el alcance definido para cada implementación.",
      ],
    ],
  },
  contact: {
    title: "Solicita una reunión",
    description:
      "Cuéntanos qué necesita tu organización y revisaremos si podemos desarrollar una solución adecuada.",
    cta: "Solicita una reunión",
    microcopy: "El alcance de cada proyecto se define después de una evaluación técnica y comercial.",
    scopeNote:
      "Los servicios disponibles fuera de Chile se limitan a desarrollo de inteligencia artificial, motor de evaluación e integraciones.",
  },
  closing: {
    title: "Soluciones sujetas a evaluación",
    description:
      "El alcance, las condiciones y la viabilidad de cada proyecto se determinan mediante una evaluación técnica y comercial previa.",
  },
  seo: {
    title: "Inteligencia artificial, motor de evaluación e integraciones | Credex",
    description:
      "Credex desarrolla soluciones de inteligencia artificial, motores de evaluación e integraciones para empresas.",
  },
};

export const COMMERCIAL_COPY = {
  GLOBAL: GLOBAL_COPY,
  CL: {
    ...GLOBAL_COPY,
    navigation: {
      solutions: "Plataforma",
      contact: "Contacto",
      clientAccess: "Acceso clientes",
    },
    hero: {
      eyebrow: "Credex Chile",
      title: "Evite incobrables y apruebe más clientes",
      highlight: "con evaluación crediticia en segundos",
      description:
        "Plataforma de evaluación crediticia para empresas que permite analizar riesgo financiero, automatizar decisiones y vender con mayor seguridad.",
      primaryCta: "Evaluar cliente ahora",
      secondaryCta: "Ver plataforma",
      microcopy: "Evalúe clientes en segundos y reduzca incobrables.",
    },
    services: {
      title: "Todo lo que necesita para evaluar crédito",
      description:
        "Una plataforma diseñada para automatizar decisiones, reducir riesgo y escalar su operación.",
      items: [
        [
          "Motor de decisión",
          "Configure reglas, políticas y automatice decisiones crediticias en tiempo real.",
        ],
        [
          "Servicios de información",
          "Integre información financiera y regulatoria para fortalecer sus procesos de evaluación.",
        ],
        [
          "Gestión de solicitudes",
          "Administre el flujo completo de evaluación, aprobación y seguimiento.",
        ],
        [
          "Analytics y monitoreo",
          "Controle desempeño, riesgo y KPI para optimizar su operación.",
        ],
      ],
    },
    contact: {
      title: "Agende una demostración en vivo",
      description:
        "Acceda al formulario y conozca cómo Credex evalúa un cliente en segundos.",
      cta: "Agendar demostración personalizada",
      microcopy: "Coordinamos una demostración adaptada a su negocio.",
      scopeNote: null,
    },
    seo: {
      title: "Evaluación crediticia para empresas en Chile | Credex",
      description:
        "Plataforma de evaluación crediticia para empresas en Chile. Automatice decisiones, reduzca incobrables y aumente la aprobación.",
    },
  },
  PE: {
    ...GLOBAL_COPY,
    hero: {
      ...GLOBAL_COPY.hero,
      eyebrow: "Credex Perú",
      title: "Soluciones tecnológicas",
      highlight: "adaptadas a los procesos de tu empresa",
      description:
        "Ofrecemos desarrollo de inteligencia artificial, motores de evaluación e integraciones para empresas en Perú.",
      primaryCta: "Solicita una reunión",
      secondaryCta: "Conoce las soluciones",
    },
    contact: {
      ...GLOBAL_COPY.contact,
      title: "Solicita una reunión",
    },
    seo: {
      ...GLOBAL_COPY.seo,
      title: "Inteligencia artificial, evaluación e integraciones en Perú | Credex",
    },
  },
  CO: {
    ...GLOBAL_COPY,
    hero: {
      ...GLOBAL_COPY.hero,
      eyebrow: "Credex Colombia",
      title: "Soluciones tecnológicas",
      highlight: "para las necesidades de tu empresa",
      description:
        "Ofrecemos desarrollo de inteligencia artificial, motores de evaluación e integraciones para empresas en Colombia.",
      primaryCta: "Conversemos sobre tu necesidad",
      secondaryCta: "Conoce las soluciones",
    },
    contact: {
      ...GLOBAL_COPY.contact,
      title: "Conversemos sobre tu necesidad",
      cta: "Solicitar contacto",
    },
    seo: {
      ...GLOBAL_COPY.seo,
      title: "Inteligencia artificial, evaluación e integraciones en Colombia | Credex",
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
      title: "Soluciones tecnológicas",
      highlight: "adaptadas a la operación de tu empresa",
      description:
        "Ofrecemos desarrollo de inteligencia artificial, motores de evaluación e integraciones para empresas en Argentina.",
      primaryCta: "Contanos qué necesitás resolver",
      secondaryCta: "Conocé las soluciones",
      microcopy: "Cada proyecto se define según las necesidades de tu empresa.",
    },
    services: {
      ...GLOBAL_COPY.services,
      title: "Nuestras líneas de servicio",
      description:
        "La oferta de Credex en Argentina se concentra en tres líneas de trabajo.",
    },
    contact: {
      ...GLOBAL_COPY.contact,
      title: "Contanos qué necesitás resolver",
      description:
        "Contanos qué necesita tu empresa y revisaremos si podemos desarrollar una solución adecuada.",
      cta: "Solicitar contacto",
      microcopy:
        "El alcance de cada proyecto se define después de una evaluación técnica y comercial.",
    },
    closing: {
      ...GLOBAL_COPY.closing,
      title: "Soluciones sujetas a evaluación",
    },
    seo: {
      ...GLOBAL_COPY.seo,
      title: "Inteligencia artificial, evaluación e integraciones en Argentina | Credex",
    },
  },
};

export function getCommercialCopy(marketCode) {
  return COMMERCIAL_COPY[marketCode] || COMMERCIAL_COPY.GLOBAL;
}
