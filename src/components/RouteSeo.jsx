import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSeoForRoute } from "../config/seo";

/**
 * Emite los metadatos de una ruta leyendo src/config/seo.js, la MISMA tabla que
 * consume scripts/generate-seo.mjs para prerenderizar el HTML servido.
 *
 * Mientras los dos lados llamen a getSeoForRoute(), lo servido y lo renderizado
 * no pueden divergir. Si alguien vuelve a escribir un <title> a mano en un
 * componente, esa pagina queda fuera del prerender y el problema vuelve.
 */
export default function RouteSeo({ route }) {
  const location = useLocation();
  const path = route || location.pathname;
  const hostname = typeof window === "undefined" ? "" : window.location.hostname;
  const seo = getSeoForRoute(path, hostname);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />

      {/* Solo en rutas utilitarias. El resto conserva el robots que ya emitian. */}
      {seo.noindex && <meta name="robots" content="noindex, follow" />}

      {seo.hreflang.map(({ hrefLang, href }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}

      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:image" content={seo.ogImage} />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.ogDescription} />
      <meta name="twitter:image" content={seo.ogImage} />
    </Helmet>
  );
}
