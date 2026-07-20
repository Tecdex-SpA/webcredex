const CLIENTIFY_USER_ID = "107027";

const FORM_IDS = {
  GLOBAL: "279377",
  CL: "279377",
  PE: "294644",
  CO: "294646",
  AR: "294645",
};

export function getClientifyFormUrl(marketCode) {
  const normalizedMarket = FORM_IDS[marketCode] ? marketCode : "GLOBAL";
  const formId = FORM_IDS[normalizedMarket];

  return `https://apps.clientify.net/forms/simpleembed/#/forms/embedform/${formId}/${CLIENTIFY_USER_ID}`;
}

export default function ClientifyForm({
  marketCode,
  title,
  className = "w-full h-full border-0",
}) {
  const normalizedMarket = FORM_IDS[marketCode] ? marketCode : "GLOBAL";
  const formUrl = getClientifyFormUrl(normalizedMarket);

  return (
    <iframe
      key={`${normalizedMarket}-${FORM_IDS[normalizedMarket]}`}
      src={formUrl}
      title={title}
      className={className}
      data-market={normalizedMarket}
      data-form-id={FORM_IDS[normalizedMarket]}
    />
  );
}
