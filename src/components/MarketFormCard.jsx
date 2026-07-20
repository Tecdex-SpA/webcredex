const MARKET_FORM_SECTIONS = {
  GLOBAL: {
    marketLabel: "Internacional",
    formId: "279377",
    userId: "107027",
    frameHeight: 760,
    offsetY: 135,
  },
  CL: {
    marketLabel: "Chile",
    formId: "279377",
    userId: "107027",
    frameHeight: 760,
    offsetY: 135,
  },
  PE: {
    marketLabel: "Perú",
    formId: "294644",
    userId: "107027",
    frameHeight: 760,
    offsetY: 135,
  },
  CO: {
    marketLabel: "Colombia",
    formId: "294646",
    userId: "107027",
    frameHeight: 760,
    offsetY: 135,
  },
  AR: {
    marketLabel: "Argentina",
    formId: "294645",
    userId: "107027",
    frameHeight: 760,
    offsetY: 135,
  },
};

function getMarketFormSection(marketCode) {
  return MARKET_FORM_SECTIONS[marketCode] || MARKET_FORM_SECTIONS.GLOBAL;
}

function getIsolatedFormUrl(marketCode, section) {
  const documentIdentity = new URLSearchParams({
    market: marketCode,
    form: section.formId,
    source: "credex",
  });

  return `https://apps.clientify.net/forms/simpleembed/?${documentIdentity.toString()}#/forms/embedform/${section.formId}/${section.userId}`;
}

export default function MarketFormCard({ marketCode, title }) {
  const normalizedMarket = MARKET_FORM_SECTIONS[marketCode] ? marketCode : "GLOBAL";
  const section = getMarketFormSection(normalizedMarket);
  const formUrl = getIsolatedFormUrl(normalizedMarket, section);
  const frameKey = `clientify-${normalizedMarket}-${section.formId}`;

  return (
    <div
      key={frameKey}
      className="w-full overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/20"
      data-market={normalizedMarket}
      data-form-id={section.formId}
      aria-label={`Formulario de contacto Credex ${section.marketLabel}`}
    >
      <div className="h-[560px] overflow-hidden sm:h-[590px] lg:h-[610px]">
        <iframe
          key={frameKey}
          name={frameKey}
          src={formUrl}
          title={`${title} - ${section.marketLabel}`}
          className="block w-full border-0 bg-white"
          style={{
            height: `${section.frameHeight}px`,
            transform: `translateY(-${section.offsetY}px)`,
          }}
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
