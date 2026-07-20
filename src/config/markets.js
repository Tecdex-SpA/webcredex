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

export function getMarketFromLocation(pathname = "/", hostname = "") {
  const host = hostname.toLowerCase();

  if (host === "www.credex.cl" || host === "ww2.credex.cl" || host === "credex.cl") {
    return MARKETS.CL;
  }

  const firstSegment = pathname.split("/").filter(Boolean)[0]?.toLowerCase();

  if (firstSegment === "cl") return MARKETS.CL;
  if (firstSegment === "pe") return MARKETS.PE;
  if (firstSegment === "co") return MARKETS.CO;
  if (firstSegment === "ar") return MARKETS.AR;

  return MARKETS.GLOBAL;
}

export function getCurrentMarket(pathname = "/") {
  if (typeof window === "undefined") return getMarketFromLocation(pathname);
  return getMarketFromLocation(pathname, window.location.hostname);
}
