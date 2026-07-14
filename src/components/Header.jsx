import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const COUNTRIES = {
  CL: {
    label: "Chile",
    flag: "🇨🇱",
    clientUrl: "https://ww8.portalcredex.cl",
  },
  PE: {
    label: "Perú",
    flag: "🇵🇪",
    clientUrl: "https://ww8.credexapp.com",
  },
};

function getCountryFromHostname() {
  const host = window.location.hostname.toLowerCase();

  if (host === "www.credex.cl" || host === "ww2.credex.cl" || host === "credex.cl") {
    return "CL";
  }

  if (host === "www.credexapp.com" || host === "credexapp.com") {
    return "PE";
  }

  return null;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [country, setCountry] = useState("CL");
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const domainCountry = getCountryFromHostname();

    if (domainCountry) {
      setCountry(domainCountry);
      localStorage.setItem("credex_country", domainCountry);
      return;
    }

    const savedCountry = localStorage.getItem("credex_country");

    if (savedCountry && COUNTRIES[savedCountry]) {
      setCountry(savedCountry);
      return;
    }

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const detected = data?.country_code === "PE" ? "PE" : "CL";
        setCountry(detected);
        localStorage.setItem("credex_country", detected);
      })
      .catch(() => {
        setCountry("CL");
      });
  }, []);

  const isLight = scrolled || !isHome;
  const selectedCountry = COUNTRIES[country];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">
        <img
          src={isLight ? "/logo-credex.png" : "/logo-credex-white.png"}
          alt="Credex"
          className="h-14 md:h-16 object-contain"
        />

        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition ${
            isLight ? "text-gray-700" : "text-white"
          }`}
        >
          <a href="/#servicios" className="hover:opacity-70">
            Plataforma
          </a>
          <a href="/#impacto" className="hover:opacity-70">
            Resultados
          </a>
          {/* <a href="/#integraciones" className="hover:opacity-70">
            Integraciones
          </a> */}
          {/* <a href="/#clientes" className="hover:opacity-70">
            Clientes
          </a> */}
        </nav>

        <div className="flex items-center gap-3">
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              localStorage.setItem("credex_country", e.target.value);
            }}
            className={`hidden md:block px-3 py-2 rounded-xl text-sm font-semibold border outline-none transition ${
              isLight
                ? "bg-white text-gray-700 border-gray-200"
                : "bg-white/10 text-white border-white/20"
            }`}
          >
            <option value="CL">🇨🇱 Chile</option>
            <option value="PE">🇵🇪 Perú</option>
          </select>

          <a
            href={selectedCountry.clientUrl}
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
