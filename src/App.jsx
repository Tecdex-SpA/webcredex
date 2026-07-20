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

const ProductPreview = React.lazy(() => import("./components/ProductPreview"));
const Flow = React.lazy(() => import("./components/Flow"));
const BeforeAfter = React.lazy(() => import("./components/BeforeAfter"));
const Services = React.lazy(() => import("./components/Services"));
const Security = React.lazy(() => import("./components/Security"));

export default function App() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const siteUrl = market.siteUrl;
  const ogImage = `${siteUrl.replace(/\/$/, "")}/preview.png`;

  const seo = market.isChile
    ? {
        title:
          "Evaluación crediticia para empresas en Chile | Scoring y Machine Learning | Credex",
        description:
          "Plataforma de evaluación crediticia para empresas en Chile. Automatice decisiones, reduzca incobrables y aumente aprobación con scoring y Machine Learning.",
        schemaDescription:
          "Plataforma de evaluación crediticia para empresas en Chile con scoring, análisis de riesgo y Machine Learning.",
        category: "FinanceApplication",
        features: [
          "Evaluación crediticia en tiempo real",
          "Scoring crediticio automatizado",
          "Análisis de riesgo financiero",
          "Machine Learning aplicado a crédito",
          "Automatización de políticas de riesgo",
        ],
      }
    : {
        title: `Inteligencia artificial, evaluación e integraciones | Credex ${
          market.code === "GLOBAL" ? "Internacional" : market.label
        }`,
        description:
          "Credex desarrolla soluciones de inteligencia artificial, motores de evaluación configurables e integraciones para empresas.",
        schemaDescription:
          "Soluciones empresariales de inteligencia artificial, motores de evaluación e integraciones tecnológicas.",
        category: "BusinessApplication",
        features: [
          "Desarrollo de inteligencia artificial",
          "Motor de evaluación configurable",
          "Integraciones mediante API",
        ],
      };

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="author" content="Credex" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href="https://www.credexapp.com/" />
        <link rel="alternate" hrefLang="es-CL" href="https://www.credex.cl/" />
        <link rel="alternate" hrefLang="es-PE" href="https://www.credexapp.com/pe" />
        <link rel="alternate" hrefLang="es-CO" href="https://www.credexapp.com/co" />
        <link rel="alternate" hrefLang="es-AR" href="https://www.credexapp.com/ar" />

        <meta property="og:site_name" content="Credex" />
        <meta property="og:locale" content={market.locale} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Credex",
            url: siteUrl,
            image: ogImage,
            applicationCategory: seo.category,
            operatingSystem: "Web",
            description: seo.schemaDescription,
            featureList: seo.features,
            provider: {
              "@type": "Organization",
              name: "Credex",
              url: siteUrl,
            },
            areaServed: market.areaServed,
          })}
        </script>
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
      <div id="contacto">
        <Contact />
      </div>
      {market.isChile && <CorfoSupport />}

      {!market.isChile && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
              Soluciones adaptadas a cada mercado
            </h2>
            <p className="text-gray-600 text-lg">
              Credex ofrece internacionalmente desarrollo de inteligencia artificial,
              motores de evaluación configurables e integraciones tecnológicas. La
              disponibilidad y alcance de cada implementación se define según las
              necesidades operativas de cada organización.
            </p>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
