import { useLocation } from "react-router-dom";
import { getCurrentMarket } from "../config/markets";
import { getCommercialCopy } from "../config/commercialCopy";
import { trackEvent } from "../lib/analytics";
import MarketFormCard, { FORM_ANCHOR_ID } from "./MarketFormCard";

export default function Contact() {
  const location = useLocation();
  const market = getCurrentMarket(location.pathname);
  const content = getCommercialCopy(market.code).contact;

  /**
   * El boton no tenia onClick, ni href, ni un form alrededor: no hacia nada.
   *
   * Llevar al formulario y dejarle el foco es lo unico que puede hacer sin
   * mentir. No hay agenda detras, y el formulario esta justo debajo: en desktop
   * suele estar a la vista, pero en movil queda bajo el pliegue y este boton es
   * la forma corta de llegar.
   */
  const irAlFormulario = () => {
    trackEvent("cta_click", { location: "contacto", market: market.code });

    const formulario = document.getElementById(FORM_ANCHOR_ID);
    if (!formulario) return;

    formulario.scrollIntoView({ behavior: "smooth", block: "start" });
    // preventScroll: el desplazamiento suave ya esta en curso; sin esto el foco
    // lo cancela con un salto seco.
    formulario.focus({ preventScroll: true });
  };

  return (
    <section id="contacto" className="bg-dark px-4 py-20 text-white sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">{content.title}</h2>
        <p className="mx-auto mb-8 max-w-3xl text-base opacity-80 md:text-lg">
          {content.description}
        </p>

        <div className="mb-10 text-center">
          <button
            type="button"
            onClick={irAlFormulario}
            aria-controls={FORM_ANCHOR_ID}
            className="rounded-xl bg-primary-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
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
