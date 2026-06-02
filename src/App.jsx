import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// normales
import Chatbot from "./components/Chatbot";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SegmentSwitcher from "./components/SegmentSwitcher";
import Problem from "./components/Problem";
import Impact from "./components/Impact";
import MachineLearning from "./components/MachineLearning";
// import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CorfoSupport from "./components/CorfoSupport";

// import { TestimonialTop, TestimonialBottom } from "./components/Testimonials";

// lazy
const ProductPreview = React.lazy(() => import("./components/ProductPreview"));
const Flow = React.lazy(() => import("./components/Flow"));
const BeforeAfter = React.lazy(() => import("./components/BeforeAfter"));
const Services = React.lazy(() => import("./components/Services"));
const Security = React.lazy(() => import("./components/Security"));
// const Integrations = React.lazy(() => import("./components/Integrations"));

const DEFAULT_SITE_URL = "https://www.credex.cl";

function getRuntimeCountry() {
  if (typeof window === "undefined") return "CL";

  const host = window.location.hostname.toLowerCase();

  if (host.includes("credexapp.com")) return "PE";
  if (
    host === "www.credex.cl" ||
    host === "ww2.credex.cl" ||
    host === "credex.cl"
  ) {
    return "CL";
  }

  const savedCountry = localStorage.getItem("credex_country");
  if (savedCountry === "PE") return "PE";

  return "CL";
}

function getRuntimeSiteUrl(country) {
  if (country === "PE") return "https://www.credexapp.com";
  return DEFAULT_SITE_URL;
}

export default function App() {
  const location = useLocation();

  const country = getRuntimeCountry();
  const isPeru = country === "PE";
  const siteUrl = getRuntimeSiteUrl(country);
  const ogImage = `${siteUrl}/preview.png`;

  const seo = {
    "/": isPeru
      ? {
          title:
            "Evaluación crediticia para empresas | Scoring y Machine Learning | Credex",
          desc:
            "Plataforma de evaluación crediticia para empresas. Automatice decisiones, reduzca incobrables y aumente aprobación con scoring y Machine Learning.",
        }
      : {
          title:
            "Evaluación crediticia para empresas en Chile | Scoring y Machine Learning | Credex",
          desc:
            "Plataforma de evaluación crediticia para empresas en Chile. Automatice decisiones, reduzca incobrables y aumente aprobación con scoring y Machine Learning.",
        },
    "/evaluacion-crediticia": isPeru
      ? {
          title:
            "Evaluación crediticia para empresas | Reducir incobrables | Credex",
          desc:
            "Evalúe clientes en segundos, reduzca riesgo financiero y automatice decisiones crediticias con Credex.",
        }
      : {
          title:
            "Evaluación crediticia para empresas en Chile | Reducir incobrables | Credex",
          desc:
            "Evalúe clientes en segundos, reduzca riesgo financiero y automatice decisiones crediticias con Credex.",
        },
    "/scoring-crediticio": isPeru
      ? {
          title:
            "Scoring crediticio para empresas | Evaluación automatizada | Credex",
          desc:
            "Sistema de scoring crediticio en tiempo real para empresas. Mejore decisiones, automatice políticas y reduzca riesgo.",
        }
      : {
          title:
            "Scoring crediticio para empresas en Chile | Evaluación automatizada | Credex",
          desc:
            "Sistema de scoring crediticio en tiempo real para empresas en Chile. Mejore decisiones, automatice políticas y reduzca riesgo.",
        },
    "/analisis-riesgo": isPeru
      ? {
          title:
            "Análisis de riesgo crediticio para empresas | Machine Learning | Credex",
          desc:
            "Herramienta avanzada de análisis de riesgo financiero con modelos predictivos y Machine Learning para empresas.",
        }
      : {
          title:
            "Análisis de riesgo crediticio para empresas en Chile | Machine Learning | Credex",
          desc:
            "Herramienta avanzada de análisis de riesgo financiero con modelos predictivos y Machine Learning para empresas en Chile.",
        },
  };

  const current = seo[location.pathname] || seo["/"];
  const canonicalUrl = `${siteUrl}${location.pathname}`;

  const seoContent = isPeru
    ? {
        title: "Evaluación crediticia para empresas",
        intro:
          "Credex es una plataforma de evaluación crediticia diseñada para empresas que necesitan analizar riesgo financiero, reducir incobrables y tomar decisiones rápidas basadas en datos.",
        schemaDescription:
          "Plataforma de evaluación crediticia para empresas con scoring, análisis de riesgo y Machine Learning.",
        areaServed: "Perú",
        locale: "es_PE",
      }
    : {
        title: "Evaluación crediticia para empresas en Chile",
        intro:
          "Credex es una plataforma de evaluación crediticia diseñada para empresas en Chile que necesitan analizar riesgo financiero, reducir incobrables y tomar decisiones rápidas basadas en datos.",
        schemaDescription:
          "Plataforma de evaluación crediticia para empresas en Chile con scoring, análisis de riesgo y Machine Learning.",
        areaServed: "Chile",
        locale: "es_CL",
      };

  return (
    <>
      <Helmet>
        <html lang="es" />

        <title>{current.title}</title>
        <meta name="description" content={current.desc} />
        <meta
          name="keywords"
          content="evaluación crediticia empresas, scoring crediticio, análisis de riesgo financiero, software evaluación crediticia, machine learning crédito, reducir incobrables, evaluación clientes empresas"
        />
        <meta name="author" content="Credex" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:site_name" content="Credex" />
        <meta property="og:locale" content={seoContent.locale} />
        <meta property="og:title" content={current.title} />
        <meta property="og:description" content={current.desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={current.title} />
        <meta name="twitter:description" content={current.desc} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Credex",
            url: siteUrl,
            image: ogImage,
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            description: seoContent.schemaDescription,
            featureList: [
              "Evaluación crediticia en tiempo real",
              "Scoring crediticio automatizado",
              "Análisis de riesgo financiero",
              "Machine Learning aplicado a crédito",
              "Automatización de políticas de riesgo",
            ],
            provider: {
              "@type": "Organization",
              name: "Credex",
              url: siteUrl,
            },
            areaServed: {
              "@type": "Country",
              name: seoContent.areaServed,
            },
          })}
        </script>
      </Helmet>

      <Chatbot />
      <Header />

      <Hero />
      <SegmentSwitcher />

      {/* <TestimonialTop /> */}

      <Problem />
      <Impact />

      <Suspense fallback={<div className="py-20" />}>
        <ProductPreview />
        <Flow />
        <BeforeAfter />
        <Services />
        <Security />

        {/* <Integrations /> */}
      </Suspense>

      <MachineLearning />

      {/* <TestimonialBottom /> */}
      {/* <Clients /> */}

      <Contact />

      <CorfoSupport />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
            {seoContent.title}
          </h2>

          <p className="text-gray-600 mb-4">{seoContent.intro}</p>

          <p className="text-gray-600 mb-4">
            A través de un sistema de scoring crediticio automatizado, permite evaluar clientes en segundos utilizando información de burós, datos financieros y modelos avanzados de análisis de riesgo.
          </p>

          <p className="text-gray-600 mb-4">
            La incorporación de Machine Learning permite identificar patrones de comportamiento de pago, aumentando la aprobación automática sin comprometer el control de riesgo.
          </p>

          <p className="text-gray-600 mb-4">
            Empresas fintech, automotrices y B2B utilizan Credex para optimizar sus procesos de evaluación crediticia, mejorar la eficiencia operativa y escalar su negocio.
          </p>

          <p className="text-gray-600">
            Más información sobre{" "}
            <a href="/evaluacion-crediticia" className="text-orange-500">
              evaluación crediticia
            </a>
            ,{" "}
            <a href="/scoring-crediticio" className="text-orange-500">
              scoring crediticio
            </a>{" "}
            y{" "}
            <a href="/analisis-riesgo" className="text-orange-500">
              análisis de riesgo
            </a>
            , junto con modelos de machine learning aplicados a crédito.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
