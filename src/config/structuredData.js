/**
 * FUENTE UNICA DE VERDAD del grafo JSON-LD, por (ruta, host).
 *
 * POR QUE EXISTE. Hasta el 2026-09-06 este grafo se construia dentro de
 * src/App.jsx y se emitia con <Helmet>, es decir SOLO despues de que React
 * montaba. El HTML servido no tenia ni un bloque ld+json:
 *
 *     www.credex.cl/            0 bloques
 *     www.credexapp.com/        0 bloques
 *     /pe /co /ar /cl           0 bloques
 *     dist/_h/(todo el build)   0 bloques
 *
 * Google renderiza JavaScript, con retraso. Los rastreadores de los asistentes
 * —OAI-SearchBot, PerplexityBot, Claude-SearchBot— mayoritariamente NO. O sea
 * la entidad Credex no existia para ninguno de ellos.
 *
 * Mismo patron que ya usan el canonical y el hreflang: la tabla vive aca, la
 * consumen los dos lados —React en tiempo de render y scripts/generate-seo.mjs
 * al prerenderizar— y por eso lo servido y lo renderizado no pueden divergir.
 *
 * NO CAMBIA NI UN DATO DEL GRAFO. Es el mismo contenido que ya emitia App.jsx,
 * movido de lugar. Completar Organization (legalName, address, telephone,
 * sameAs, knowsAbout) y decidir el entity home son trabajo aparte, y ese si
 * pasa por el registro de claims y por legal.
 */
import { MARKETS } from "./markets.js";
import { COMMERCIAL_COPY } from "./commercialCopy.js";
import { getSeoForRoute, marketForRoute } from "./seo.js";

/**
 * @id de la organizacion. Es el MISMO en los dos dominios y en todas las rutas,
 * a proposito: un @id distinto por dominio parte la entidad en dos y hace que un
 * modelo no sepa si Credex Chile y Credex internacional son la misma empresa.
 *
 * PENDIENTE DE DECISION (D-AEO-02): hoy apunta a credexapp.com. Si el mercado
 * principal es Chile, el entity home deberia ser credex.cl. Cambiarlo es barato
 * ahora y caro despues, pero es una decision de negocio, no de este archivo.
 */
export const ORGANIZATION_ID = "https://www.credexapp.com/#organization";

const ORGANIZATION = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Credex",
  url: "https://www.credexapp.com/",
  logo: "https://www.credexapp.com/logo-credex.png",
  description:
    "Credex desarrolla tecnología para evaluación, riesgo y decisiones financieras y crediticias.",
};

const SCHEMA_DESCRIPTION_CL =
  "Software para evaluación y decisión crediticia con información financiera, reglas configurables, analítica, scoring y trazabilidad.";

const SCHEMA_DESCRIPTION_INTL =
  "Servicios de modelamiento, scoring, motores de evaluación e integraciones para procesos financieros, crediticios y de riesgo.";

const FEATURES_CL = [
  "Evaluación crediticia de clientes",
  "Motor de decisión configurable",
  "Integración de información financiera",
  "Gestión de solicitudes",
  "Analítica y monitoreo de riesgo",
  "Scoring y modelos predictivos",
];

const FEATURES_INTL = [
  "Modelamiento financiero y crediticio",
  "Scoring y analítica de riesgo",
  "Motores de evaluación configurables",
  "Integraciones de información y sistemas",
  "Modelos predictivos sujetos a disponibilidad de datos",
];

export function toHtmlLanguage(locale) {
  return locale ? locale.replace("_", "-") : "es";
}

function areaServedSchema(market) {
  if (market.code === "GLOBAL") return "Worldwide";

  return { "@type": "Country", name: market.areaServed };
}

/**
 * Grafo de una ruta en un host.
 *
 * marketForRoute() —y no getCurrentMarket()— es lo que hace que esto se pueda
 * calcular sin window: espeja la misma logica de host y ruta, sin localStorage.
 */
export function structuredDataForRoute(route, hostname = "") {
  const market = marketForRoute(route, hostname);
  const seo = getSeoForRoute(route, hostname);
  const copy = COMMERCIAL_COPY[market.code] || COMMERCIAL_COPY[MARKETS.GLOBAL.code];

  const canonicalUrl = seo.canonical;
  const inLanguage = toHtmlLanguage(market.locale);

  const websiteId = `${canonicalUrl}#website`;
  const offeringId = `${canonicalUrl}#offering`;

  const offering = market.isChile
    ? {
        "@type": "SoftwareApplication",
        "@id": offeringId,
        name: "Credex",
        url: canonicalUrl,
        image: seo.ogImage,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        inLanguage,
        description: SCHEMA_DESCRIPTION_CL,
        featureList: FEATURES_CL,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: areaServedSchema(market),
      }
    : {
        "@type": "Service",
        "@id": offeringId,
        name: copy.seo.serviceType,
        url: canonicalUrl,
        image: seo.ogImage,
        serviceType: copy.seo.serviceType,
        inLanguage,
        description: SCHEMA_DESCRIPTION_INTL,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: areaServedSchema(market),
      };

  return {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION,
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: canonicalUrl,
        name: market.code === "GLOBAL" ? "Credex" : `Credex ${market.label}`,
        inLanguage,
        publisher: { "@id": ORGANIZATION_ID },
      },
      offering,
    ],
  };
}
