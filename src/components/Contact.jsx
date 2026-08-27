import { useLocation } from "react-router-dom";
import { getCurrentMarket } from "../config/markets";
import { getCommercialCopy } from "../config/commercialCopy";
import MarketFormCard from "./MarketFormCard";

export default function Contact() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const content = getCommercialCopy(market.code).contact;

  return (
    <section id="contacto" className="bg-dark px-4 py-20 text-white sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">{content.title}</h2>
        <p className="mx-auto mb-8 max-w-3xl text-base opacity-80 md:text-lg">
          {content.description}
        </p>

        <div className="mb-10 text-center">
          <button className="rounded-xl bg-primary-500 px-8 py-4 font-semibold text-white transition hover:scale-105">
            {content.cta}
          </button>
          <p className="mt-3 text-sm opacity-70">{content.microcopy}</p>
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <MarketFormCard
            key={`${market.code}-${location.pathname}-${location.search}`}
            marketCode={market.code}
            title={content.title}
          />
        </div>
      </div>
    </section>
  );
}
