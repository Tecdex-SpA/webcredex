import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ENABLED_MARKETS,
  MARKETS,
  getCurrentMarket,
} from "../config/markets";

const IP_MARKET_MAP = {
  CL: "CL",
  PE: "PE",
  CO: "CO",
};

function isCredexChileHostname(hostname) {
  const host = hostname.toLowerCase();
  return host === "www.credex.cl" || host === "ww2.credex.cl" || host === "credex.cl";
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const market = getCurrentMarket(location.pathname);

  const isHome = ["/", "/cl", "/pe", "/co"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isCredexChileHostname(window.location.hostname)) return;
    if (location.pathname !== "/") return;

    const manuallySelectedMarket = localStorage.getItem("credex_market_manual");
    if (manuallySelectedMarket && MARKETS[manuallySelectedMarket]) {
      const selected = MARKETS[manuallySelectedMarket];
      if (selected.path !== location.pathname) {
        navigate(selected.path, { replace: true });
      }
      return;
    }

    const controller = new AbortController();

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("No fue posible detectar el país");
        return response.json();
      })
      .then((data) => {
        const detectedCode = IP_MARKET_MAP[data?.country_code] || "GLOBAL";
        const detectedMarket = MARKETS[detectedCode];

        localStorage.setItem("credex_country", detectedMarket.code);
        localStorage.setItem("credex_market_source", "ip");

        if (detectedMarket.path !== location.pathname) {
          navigate(detectedMarket.path, { replace: true });
        }
      })
      .catch((error) => {
        if (error.name === "AbortError") return;
        localStorage.setItem("credex_country", "GLOBAL");
        localStorage.setItem("credex_market_source", "fallback");
      });

    return () => controller.abort();
  }, [location.pathname, navigate]);

  const isLight = scrolled || !isHome;

  const handleMarketChange = (event) => {
    const selectedMarket = MARKETS[event.target.value];
    if (!selectedMarket) return;

    localStorage.setItem("credex_country", selectedMarket.code);
    localStorage.setItem("credex_market_manual", selectedMarket.code);
    localStorage.setItem("credex_market_source", "manual");
    navigate(selectedMarket.path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">
        <a href={market.path} aria-label="Ir al inicio de Credex">
          <img
            src={isLight ? "/logo-credex.png" : "/logo-credex-white.png"}
            alt="Credex"
            className="h-14 md:h-16 object-contain"
          />
        </a>

        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition ${
            isLight ? "text-gray-700" : "text-white"
          }`}
        >
          <a href={`${market.path}#servicios`} className="hover:opacity-70">
            Soluciones
          </a>
          <a href={`${market.path}#contacto`} className="hover:opacity-70">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <label htmlFor="market-selector" className="sr-only">
            Seleccionar país o mercado
          </label>
          <select
            id="market-selector"
            value={market.code}
            onChange={handleMarketChange}
            className={`px-3 py-2 rounded-xl text-sm font-semibold border outline-none transition ${
              isLight
                ? "bg-white text-gray-700 border-gray-200"
                : "bg-[#0B1F3A]/80 text-white border-white/30"
            }`}
            aria-label="Seleccionar país o mercado"
          >
            {ENABLED_MARKETS.map((marketCode) => {
              const option = MARKETS[marketCode];
              return (
                <option key={option.code} value={option.code}>
                  {option.flag} {option.label}
                </option>
              );
            })}
          </select>

          <a
            href={market.clientUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#1C2543] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-slate-900/20 border border-white/10 hover:bg-orange-500 hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
          >
            Acceso clientes
          </a>
        </div>
      </div>
    </header>
  );
}
