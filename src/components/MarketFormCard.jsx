const FORM_CARDS = {
  GLOBAL: {
    marketLabel: "Internacional",
    formId: "279377",
    userId: "107027",
  },
  CL: {
    marketLabel: "Chile",
    formId: "279377",
    userId: "107027",
  },
  PE: {
    marketLabel: "Perú",
    formId: "294644",
    userId: "107027",
  },
  CO: {
    marketLabel: "Colombia",
    formId: "294646",
    userId: "107027",
  },
  AR: {
    marketLabel: "Argentina",
    formId: "294645",
    userId: "107027",
  },
};

function getFormCard(marketCode) {
  return FORM_CARDS[marketCode] || FORM_CARDS.GLOBAL;
}

export default function MarketFormCard({ marketCode, title }) {
  const card = getFormCard(marketCode);
  const formUrl = `https://apps.clientify.net/forms/simpleembed/#/forms/embedform/${card.formId}/${card.userId}`;

  return (
    <article
      key={`${marketCode}-${card.formId}`}
      className="w-full max-w-3xl rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-white/10"
      data-market={marketCode}
      data-form-id={card.formId}
      aria-label={`Formulario de contacto Credex ${card.marketLabel}`}
    >
      <iframe
        key={formUrl}
        src={formUrl}
        title={`${title} - ${card.marketLabel}`}
        className="block h-[700px] w-full rounded-xl border-0 bg-white"
        loading="eager"
      />
    </article>
  );
}
