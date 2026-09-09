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
import TestimonialEuroCapital from "./components/TestimonialEuroCapital";
import Footer from "./components/Footer";
import CorfoSupport from "./components/CorfoSupport";
import { getCurrentMarket } from "./config/markets";
import { getCommercialCopy } from "./config/commercialCopy";
import { getSeoForRoute } from "./config/seo";
import {
  structuredDataForRoute,
  toHtmlLanguage,
} from "./config/structuredData";

const ProductPreview = React.lazy(() => import("./components/ProductPreview"));
const Flow = React.lazy(() => import("./components/Flow"));
const BeforeAfter = React.lazy(() => import("./components/BeforeAfter"));
const Services = React.lazy(() => import("./components/Services"));
const Security = React.lazy(() => import("./components/Security"));

const OG_LOCALE_ALTERNATES = ["es_CL", "es_PE", "es_CO", "es_AR", "es_419"];

export default function App() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const copy = getCommercialCopy(market.code);
  // FUENTE UNICA: la misma tabla que prerenderiza el HTML servido. El canonical
  // de "/" depende del host, asi que no se puede derivar solo de la ruta.
  const routeSeo = getSeoForRoute(
    location.pathname,
    typeof window === "undefined" ? "" : window.location.hostname,
  );
  const canonicalUrl = routeSeo.canonical;
  const ogImage = routeSeo.ogImage;
  const htmlLanguage = toHtmlLanguage(market.locale);

  // El grafo se calcula con la MISMA funcion que usa scripts/generate-seo.mjs
  // para prerenderizarlo en el HTML servido. Si divergen, divergen los dos.
  const structuredData = structuredDataForRoute(
    location.pathname,
    typeof window === "undefined" ? "" : window.location.hostname,
  );

  return (
    <>
      <Helmet>
        <html lang={htmlLanguage} />
        <title>{routeSeo.title}</title>
        <meta name="description" content={routeSeo.description} />
        <meta name="author" content="Credex" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={canonicalUrl} />

        {routeSeo.hreflang.map(({ hrefLang, href }) => (
          <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
        ))}

        <meta property="og:site_name" content="Credex" />
        <meta property="og:locale" content={market.locale} />
        {OG_LOCALE_ALTERNATES.filter((locale) => locale !== market.locale).map((locale) => (
          <meta key={locale} property="og:locale:alternate" content={locale} />
        ))}
        <meta property="og:title" content={routeSeo.ogTitle} />
        <meta property="og:description" content={routeSeo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`Soluciones Credex para ${market.label}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={routeSeo.ogTitle} />
        <meta name="twitter:description" content={routeSeo.ogDescription} />
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
          {/* Va justo despues de Impact, no al final de la pagina: es una persona
              con el cargo exacto del comprador objetivo, y sigue a la seccion que
              declara las capacidades. Ademas hereda su registro: Impact dice "no
              publicamos porcentajes prestados" y esta cita no trae ninguna cifra. */}
          <TestimonialEuroCapital />
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
