const MARKET_FORM_SECTIONS = {
  GLOBAL: {
    marketLabel: "Internacional",
    formId: "279377",
    userId: "107027",
    minHeight: 640,
  },
  CL: {
    marketLabel: "Chile",
    formId: "279377",
    userId: "107027",
    minHeight: 640,
  },
  PE: {
    marketLabel: "Perú",
    formId: "294644",
    userId: "107027",
    minHeight: 640,
  },
  CO: {
    marketLabel: "Colombia",
    formId: "294646",
    userId: "107027",
    minHeight: 640,
  },
  AR: {
    marketLabel: "Argentina",
    formId: "294645",
    userId: "107027",
    minHeight: 640,
  },
};

function getMarketFormSection(marketCode) {
  return MARKET_FORM_SECTIONS[marketCode] || MARKET_FORM_SECTIONS.GLOBAL;
}

export default function MarketFormCard({ marketCode, title }) {
  const section = getMarketFormSection(marketCode);
  const formUrl = `https://apps.clientify.net/forms/simpleembed/#/forms/embedform/${section.formId}/${section.userId}`;

  return (
    <div
      key={`${marketCode}-${section.formId}`}
      className="w-full"
      data-market={marketCode}
      data-form-id={section.formId}
      aria-label={`Formulario de contacto Credex ${section.marketLabel}`}
    >
      <iframe
        key={formUrl}
        src={formUrl}
        title={`${title} - ${section.marketLabel}`}
        className="block w-full border-0 bg-white"
        style={{ minHeight: `${section.minHeight}px` }}
        loading="eager"
      />
    </div>
  );
}
