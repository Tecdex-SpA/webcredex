import { useEffect } from "react";

const CLIENTIFY_BOT_ID = "236020";
const CLIENTIFY_USER_ID = "107027";

export default function Chatbot() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Evita reinicializar Clientify si el componente se monta más de una vez.
    if (window.__credexClientifyLoaded) return;
    window.__credexClientifyLoaded = true;

    // Marca local para controlar visitas y evitar comportamiento insistente.
    const storageKey = "credex_clientify_chat_loaded_at";

    try {
      if (!localStorage.getItem(storageKey)) {
        localStorage.setItem(storageKey, new Date().toISOString());
      }
    } catch (error) {
      // Si el navegador bloquea localStorage, el chatbot igual debe cargar.
      console.warn("Clientify localStorage no disponible:", error);
    }

    // Configuración requerida por Clientify.
    window.Clientify_botId = CLIENTIFY_BOT_ID;
    window.Clientify_botUserId = CLIENTIFY_USER_ID;

    // Evita duplicar el nodo raíz del chatbot.
    if (!document.querySelector("chatbot-root")) {
      const root = document.createElement("chatbot-root");
      document.body.appendChild(root);
    }

    // Evita duplicar el launcher.
    if (!document.getElementById("clientify-chatbot-launcher")) {
      const launcher = document.createElement("script");
      launcher.id = "clientify-chatbot-launcher";
      launcher.src = "https://api.clientify.net/static/js/chatbot/launcher/launcher.js";
      launcher.async = true;

      document.head.appendChild(launcher);
    }
  }, []);

  return null;
}