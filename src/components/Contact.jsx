import { useLocation } from "react-router-dom";
import { getCurrentMarket } from "../config/markets";
import { getCommercialCopy } from "../config/commercialCopy";

export default function Contact() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const content = getCommercialCopy(market.code).contact;

  return (
    <section id="contacto" className="py-20 bg-dark text-white text-center">
      <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
      <p className="opacity-80 mb-8">{content.description}</p>

      <div className="text-center mb-10">
        <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
          {content.cta}
        </button>
        <p className="text-sm opacity-70 mt-3">{content.microcopy}</p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl h-[600px]">
          <iframe
            src="https://apps.clientify.net/forms/simpleembed/#/forms/embedform/279377/107027"
            title={content.title}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
