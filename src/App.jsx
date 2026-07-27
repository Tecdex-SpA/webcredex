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

export default function App() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const copy = getCommercialCopy(market.code);
  const siteUrl = market.siteUrl;
  const ogImage = `${siteUrl.replace(/\/$/, "")}/preview.png`;

  const seo = {
    title: copy.seo.title,
    description: copy.seo.description,
    schemaDescription: market.isChile
      ? "Solución para evaluación y decisión crediticia con información, reglas, analítica, scoring y modelos predictivos."
      : "Soluciones de modelamiento, motores de evaluación e integraciones para procesos financieros, crediticios y de riesgo.",
    category: market.isChile ? "FinanceApplication" : "BusinessApplication",
    features: market.isChile
      ? ["Evaluación crediticia", "Motor de decisión configurable", "Información e integraciones", "Analítica y monitoreo", "Scoring y modelos predictivos"]
      : ["Modelamiento y analítica", "Motor de evaluación configurable", "Integraciones de información y sistemas", "Scoring y modelos predictivos sujetos a disponibilidad de datos"],
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
            provider: { "@type": "Organization", name: "Credex", url: siteUrl },
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
      <Contact />
      {market.isChile && <CorfoSupport />}

      {!market.isChile && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">{copy.closing.title}</h2>
            <p className="text-gray-600 text-lg">{copy.closing.description}</p>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
