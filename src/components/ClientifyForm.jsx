const CLIENTIFY_USER_ID = "107027";

const FORM_IDS = {
  GLOBAL: "279377",
  CL: "279377",
  PE: "294644",
  CO: "294646",
  AR: "294645",
};

function getClientifyFormUrl(marketCode) {
  const normalizedMarket = FORM_IDS[marketCode] ? marketCode : "GLOBAL";
  const formId = FORM_IDS[normalizedMarket];

  // El parámetro previo al hash obliga al navegador a cargar un documento nuevo.
  // Sin este parámetro, Clientify puede interpretar el cambio solo como navegación
  // interna por hash y conservar el formulario anterior dentro de la SPA embebida.
  return `https://apps.clientify.net/forms/simpleembed/?credex_market=${normalizedMarket}&credex_form=${formId}#/forms/embedform/${formId}/${CLIENTIFY_USER_ID}`;
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
      key={formUrl}
      src={formUrl}
      title={title}
      className={className}
      data-market={normalizedMarket}
      data-form-id={FORM_IDS[normalizedMarket]}
    />
  );
}
