import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ENABLED_MARKETS, MARKETS, getCurrentMarket } from "../config/markets";
import { getCommercialCopy } from "../config/commercialCopy";

function getMarketDestination(market) {
  if (market.code === "CL") return "https://www.credex.cl";
  if (market.code === "GLOBAL") return "https://www.credexapp.com/?market=GLOBAL";

  return `${market.siteUrl}?market=${market.code}`;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const navigation = getCommercialCopy(market.code).navigation;
  const isHome = ["/", "/cl", "/pe", "/co", "/ar"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const requestedMarket = new URLSearchParams(window.location.search)
      .get("market")
      ?.toUpperCase();

    if (requestedMarket && MARKETS[requestedMarket]) {
      localStorage.setItem("credex_country", requestedMarket);
      localStorage.setItem("credex_market_manual", requestedMarket);
      localStorage.setItem("credex_market_source", "manual");
      return;
    }

    if (["PE", "CO", "AR"].includes(market.code)) {
      localStorage.setItem("credex_country", market.code);
      localStorage.setItem("credex_market_source", "geo");
    }
  }, [location.pathname, location.search, market.code]);

  const isLight = scrolled || !isHome;

  const handleMarketChange = (event) => {
    const selectedMarket = MARKETS[event.target.value];
    if (!selectedMarket) return;

    localStorage.setItem("credex_country", selectedMarket.code);
    localStorage.setItem("credex_market_manual", selectedMarket.code);
    localStorage.setItem("credex_market_source", "manual");
    window.location.assign(getMarketDestination(selectedMarket));
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isLight ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">
        <a href={getMarketDestination(market)} aria-label="Ir al inicio de Credex">
          <img src={isLight ? "/logo-credex.png" : "/logo-credex-white.png"} alt="Credex" className="h-14 md:h-16 object-contain" />
        </a>

        <nav className={`hidden md:flex items-center gap-8 text-sm font-medium transition ${isLight ? "text-gray-700" : "text-white"}`}>
          <a href={`${getMarketDestination(market)}#servicios`} className="hover:opacity-70">{navigation.solutions}</a>
          <a href={`${getMarketDestination(market)}#contacto`} className="hover:opacity-70">{navigation.contact}</a>
        </nav>

        <div className="flex items-center gap-3">
          <label htmlFor="market-selector" className="sr-only">Seleccionar país o mercado</label>
          <select id="market-selector" value={market.code} onChange={handleMarketChange} className={`px-3 py-2 rounded-xl text-sm font-semibold border outline-none transition ${isLight ? "bg-white text-gray-700 border-gray-200" : "bg-[#0B1F3A]/80 text-white border-white/30"}`} aria-label="Seleccionar país o mercado">
            {ENABLED_MARKETS.map((marketCode) => {
              const option = MARKETS[marketCode];
              return <option key={option.code} value={option.code}>{option.flag} {option.label}</option>;
            })}
          </select>

          <a href={market.clientUrl} target="_blank" rel="noopener noreferrer" className="hidden md:block bg-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-slate-900/20 border border-white/10 hover:bg-primary-500 hover:shadow-primary-500/30 hover:scale-105 transition-all duration-300">
            {navigation.clientAccess}
          </a>
        </div>
      </div>
    </header>
  );
}
