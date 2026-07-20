const CLIENTIFY_USER_ID = "107027";

const FORM_IDS = {
  GLOBAL: "279377",
  CL: "279377",
  PE: "294644",
  CO: "294646",
  AR: "294645",
};

function getClientifyFormUrl(marketCode) {
  const formId = FORM_IDS[marketCode] || FORM_IDS.GLOBAL;

  return `https://apps.clientify.net/forms/simpleembed/#/forms/embedform/${formId}/${CLIENTIFY_USER_ID}`;
}

export default function ClientifyForm({
  marketCode,
  title,
  className = "w-full h-full border-0",
}) {
  return (
    <iframe
      key={marketCode}
      src={getClientifyFormUrl(marketCode)}
      title={title}
      className={className}
    />
  );
}
