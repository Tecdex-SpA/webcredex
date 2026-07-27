import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import Chatbot from "./components/Chatbot";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SegmentSwitcher from "./components/SegmentSwitcher";
import Problem from "./components/Problem";
import Impact from "./components/Impact";
import MachineLearning from "./components/MachineLearning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CorfoSupport from "./components/CorfoSupport";
import { getCurrentMarket } from "./config/markets";
import { getCommercialCopy } from "./config/commercialCopy";

const ProductPreview = React.lazy(() => import("./components/ProductPreview"));
const Flow = React.lazy(() => import("./components/Flow"));
const BeforeAfter = React.lazy(() => import("./components/BeforeAfter"));
const Services = React.lazy(() => import("./components/Services"));
const Security = React.lazy(() => import("./components/Security"));

const REGIONAL_ALTERNATES = [
  { hrefLang: "x-default", href: "https://www.credexapp.com/" },
  { hrefLang: "es-CL", href: "https://www.credex.cl/" },
  { hrefLang: "es-PE", href: "https://www.credexapp.com/pe" },
  { hrefLang: "es-CO", href: "https://www.credexapp.com/co" },
  { hrefLang: "es-AR", href: "https://www.credexapp.com/ar" },
];

const OG_LOCALE_ALTERNATES = ["es_CL", "es_PE", "es_CO", "es_AR", "es_419"];

function toHtmlLanguage(locale) {
  return locale?.replace("_", "-") || "es";
}

function getAreaServedSchema(market) {
  if (market.code === "GLOBAL") return "Worldwide";

  return {
    "@type": "Country",
    name: market.areaServed,
  };
}

export default function App() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const copy = getCommercialCopy(market.code);
  const siteUrl = market.siteUrl;
  const canonicalUrl = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  const ogImage = `${siteUrl.replace(/\/$/, "")}/preview.png`;
  const htmlLanguage = toHtmlLanguage(market.locale);

  const seo = {
    title: copy.seo.title,
    description: copy.seo.description,
    serviceType: copy.seo.serviceType,
    schemaDescription: market.isChile
      ? "Software para evaluación y decisión crediticia con información financiera, reglas configurables, analítica, scoring y trazabilidad."
      : "Servicios de modelamiento, scoring, motores de evaluación e integraciones para procesos financieros, crediticios y de riesgo.",
    category: market.isChile ? "FinanceApplication" : "FinancialService",
    features: market.isChile
      ? [
          "Evaluación crediticia de clientes",
          "Motor de decisión configurable",
          "Integración de información financiera",
          "Gestión de solicitudes",
          "Analítica y monitoreo de riesgo",
          "Scoring y modelos predictivos",
        ]
      : [
          "Modelamiento financiero y crediticio",
          "Scoring y analítica de riesgo",
          "Motores de evaluación configurables",
          "Integraciones de información y sistemas",
          "Modelos predictivos sujetos a disponibilidad de datos",
        ],
  };

  const organizationId = "https://www.credexapp.com/#organization";
  const websiteId = `${canonicalUrl}#website`;
  const offeringId = `${canonicalUrl}#offering`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Credex",
        url: "https://www.credexapp.com/",
        logo: "https://www.credexapp.com/logo-credex.png",
        description:
          "Credex desarrolla tecnología para evaluación, riesgo y decisiones financieras y crediticias.",
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: canonicalUrl,
        name: market.code === "GLOBAL" ? "Credex" : `Credex ${market.label}`,
        inLanguage: htmlLanguage,
        publisher: { "@id": organizationId },
      },
      market.isChile
        ? {
            "@type": "SoftwareApplication",
            "@id": offeringId,
            name: "Credex",
            url: canonicalUrl,
            image: ogImage,
            applicationCategory: seo.category,
            operatingSystem: "Web",
            inLanguage: htmlLanguage,
            description: seo.schemaDescription,
            featureList: seo.features,
            provider: { "@id": organizationId },
            areaServed: getAreaServedSchema(market),
          }
        : {
            "@type": "Service",
            "@id": offeringId,
            name: seo.serviceType,
            url: canonicalUrl,
            image: ogImage,
            serviceType: seo.serviceType,
            inLanguage: htmlLanguage,
            description: seo.schemaDescription,
            provider: { "@id": organizationId },
            areaServed: getAreaServedSchema(market),
          },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={htmlLanguage} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="author" content="Credex" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={canonicalUrl} />

        {REGIONAL_ALTERNATES.map(({ hrefLang, href }) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}

        <meta property="og:site_name" content="Credex" />
        <meta property="og:locale" content={market.locale} />
        {OG_LOCALE_ALTERNATES.filter((locale) => locale !== market.locale).map((locale) => (
          <meta key={locale} property="og:locale:alternate" content={locale} />
        ))}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`Soluciones Credex para ${market.label}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={`Soluciones Credex para ${market.label}`} />

        {market.code !== "GLOBAL" && (
          <meta name="geo.region" content={`${market.code}`} />
        )}
        {market.code !== "GLOBAL" && (
          <meta name="geo.placename" content={market.areaServed} />
        )}

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Chatbot />
      <Header />
      <Hero />

      {market.isChile && (
        <>
          <SegmentSwitcher />
          <Problem />
          <Impact />
        </>
      )}

      <Suspense fallback={<div className="py-20" />}>
        {market.isChile && (
          <>
            <ProductPreview />
            <Flow />
            <BeforeAfter />
          </>
        )}
        <Services />
        {market.isChile && <Security />}
      </Suspense>

      <MachineLearning />
      <Contact />
      {market.isChile && <CorfoSupport />}

      {!market.isChile && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              {copy.closing.title}
            </h2>
            <p className="text-gray-600 text-lg">{copy.closing.description}</p>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
