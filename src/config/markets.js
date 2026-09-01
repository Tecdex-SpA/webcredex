export const MARKETS = {
  GLOBAL: {
    code: "GLOBAL",
    label: "Internacional",
    flag: "🌎",
    path: "/",
    siteUrl: "https://www.credexapp.com",
    clientUrl: "https://ww8.credexapp.com",
    locale: "es_419",
    areaServed: "Internacional",
    isChile: false,
  },
  CL: {
    code: "CL",
    label: "Chile",
    flag: "🇨🇱",
    path: "/cl",
    siteUrl: "https://www.credex.cl",
    clientUrl: "https://ww8.portalcredex.cl",
    locale: "es_CL",
    areaServed: "Chile",
    isChile: true,
  },
  PE: {
    code: "PE",
    label: "Perú",
    flag: "🇵🇪",
    path: "/pe",
    siteUrl: "https://www.credexapp.com/pe",
    clientUrl: "https://ww8.credexapp.com",
    locale: "es_PE",
    areaServed: "Perú",
    isChile: false,
  },
  CO: {
    code: "CO",
    label: "Colombia",
    flag: "🇨🇴",
    path: "/co",
    siteUrl: "https://www.credexapp.com/co",
    clientUrl: "https://ww8.credexapp.com",
    locale: "es_CO",
    areaServed: "Colombia",
    isChile: false,
  },
  AR: {
    code: "AR",
    label: "Argentina",
    flag: "🇦🇷",
    path: "/ar",
    siteUrl: "https://www.credexapp.com/ar",
    clientUrl: "https://ww8.credexapp.com",
    locale: "es_AR",
    areaServed: "Argentina",
    isChile: false,
  },
};

export const ENABLED_MARKETS = ["GLOBAL", "CL", "PE", "CO", "AR"];

function getMarketFromPath(pathname = "/") {
  const firstSegment = pathname.split("/").filter(Boolean)[0]?.toLowerCase();

  if (firstSegment === "cl") return MARKETS.CL;
  if (firstSegment === "pe") return MARKETS.PE;
  if (firstSegment === "co") return MARKETS.CO;
  if (firstSegment === "ar") return MARKETS.AR;

  return null;
}

function isChileHostname(hostname = "") {
  const host = hostname.toLowerCase();
  return host === "www.credex.cl" || host === "ww2.credex.cl" || host === "credex.cl";
}

export function getMarketFromLocation(pathname = "/", hostname = "", search = "") {
  if (isChileHostname(hostname)) return MARKETS.CL;

  const requestedCode = new URLSearchParams(search).get("market")?.toUpperCase();
  if (requestedCode && MARKETS[requestedCode] && requestedCode !== "CL") {
    return MARKETS[requestedCode];
  }

  const pathMarket = getMarketFromPath(pathname);
  if (pathMarket) return pathMarket;

  return MARKETS.GLOBAL;
}

/**
 * El mercado depende SOLO de la URL (host, ?market= y ruta). Nunca de
 * localStorage.
 *
 * POR QUE. Hasta el 2026-09-01 esta funcion leia "credex_market_manual" cuando
 * el pathname era "/" y devolvia ese mercado. Efecto: quien alguna vez eligio
 * Peru en el selector abria https://www.credexapp.com/ y veia el CONTENIDO de
 * Peru mientras el HTML servido declaraba el canonical, el title y la
 * description de Internacional. Google nunca lo vio —no tiene localStorage—
 * pero GA4 si: reportaba el page_title de Internacional para sesiones que
 * estuvieron leyendo Peru.
 *
 * La memoria del selector no desaparecio: ahora la aplica <HomeMarketRoute/>,
 * que lleva a la persona a la RUTA de su mercado (/pe, /co, /ar). Asi la URL,
 * el title, el canonical y el contenido dicen los cuatro lo mismo.
 */
export function getCurrentMarket(pathname = "/") {
  if (typeof window === "undefined") return getMarketFromLocation(pathname);

  return getMarketFromLocation(
    pathname,
    window.location.hostname,
    window.location.search,
  );
}

/**
 * Mercado que la persona eligio A MANO en el selector del header, si es uno con
 * ruta propia en este sitio.
 *
 * ESTO NO ES GEOLOCALIZACION. No consulta /api/geo ni la IP, no decide por
 * nadie: devuelve una eleccion explicita que la persona ya hizo con un clic. La
 * redireccion por IP se borro de index.html el 2026-08-29 y no vuelve por aca.
 *
 * Quedan fuera a proposito:
 *   · CL, que tiene dominio propio (credex.cl) y no una ruta de este sitio.
 *   · GLOBAL, cuya ruta es "/": no hay a donde llevar a nadie.
 */
export function getSavedManualMarket() {
  if (typeof window === "undefined") return null;

  try {
    const savedCode = localStorage.getItem("credex_market_manual");
    const saved = savedCode ? MARKETS[savedCode] : null;

    if (!saved || saved.code === "CL" || saved.code === "GLOBAL") return null;

    return saved;
  } catch {
    // Sin localStorage no hay memoria del selector y no pasa nada mas.
    return null;
  }
}
