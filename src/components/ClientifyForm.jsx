const DEFAULT_FORM_URL =
  "https://apps.clientify.net/forms/simpleembed/#/forms/embedform/279377/107027";

const REGIONAL_FORM_SCRIPTS = {
  PE: "https://api.clientify.net/web-marketing/superforms/script/294644.js",
  CO: "https://api.clientify.net/web-marketing/superforms/script/294646.js",
  AR: "https://api.clientify.net/web-marketing/superforms/script/294645.js",
};

function buildRegionalFormDocument(scriptUrl) {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body { margin: 0; padding: 0; background: transparent; }
      body { min-height: 100vh; }
    </style>
  </head>
  <body>
    <script type="text/javascript" src="${scriptUrl}"><\/script>
  </body>
</html>`;
}

export default function ClientifyForm({ marketCode, title, className = "w-full h-full border-0" }) {
  const regionalScript = REGIONAL_FORM_SCRIPTS[marketCode];

  if (!regionalScript) {
    return (
      <iframe
        src={DEFAULT_FORM_URL}
        title={title}
        className={className}
      />
    );
  }

  return (
    <iframe
      srcDoc={buildRegionalFormDocument(regionalScript)}
      title={title}
      className={className}
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
