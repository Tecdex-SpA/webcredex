import { useEffect, useRef } from "react";

const DEFAULT_FORM_URL =
  "https://apps.clientify.net/forms/simpleembed/#/forms/embedform/279377/107027";

const REGIONAL_FORM_SCRIPTS = {
  PE: "https://api.clientify.net/web-marketing/superforms/script/294644.js",
  CO: "https://api.clientify.net/web-marketing/superforms/script/294646.js",
  AR: "https://api.clientify.net/web-marketing/superforms/script/294645.js",
};

export default function ClientifyForm({
  marketCode,
  title,
  className = "w-full h-full border-0",
}) {
  const containerRef = useRef(null);
  const regionalScript = REGIONAL_FORM_SCRIPTS[marketCode];

  useEffect(() => {
    if (!regionalScript || !containerRef.current) return undefined;

    const container = containerRef.current;
    container.replaceChildren();

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = regionalScript;
    script.async = true;
    script.dataset.credexClientifyMarket = marketCode;

    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, [marketCode, regionalScript]);

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
    <div
      ref={containerRef}
      className="w-full min-h-[600px] bg-white rounded-xl overflow-hidden"
      aria-label={title}
    />
  );
}
