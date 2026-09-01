import { useEffect } from "react";

/**
 * Quita del <head> las etiquetas que vinieron prerenderizadas, una vez que
 * React ya monto las suyas con los mismos valores.
 *
 * POR QUE HACE FALTA. scripts/generate-seo.mjs emite title, description,
 * canonical, hreflang y og/twitter en el HTML servido, marcadas con data-rh.
 * En React 18 ese atributo alcanzaba: react-helmet-async administraba el head
 * y reemplazaba lo que llevara esa marca.
 *
 * Con react-helmet-async 3 sobre React 19 ya no: React 19 hoistea <meta> y
 * <link> por su cuenta, sin marcarlos ni deduplicarlos contra lo que ya estaba.
 * Resultado, el DOM terminaba con dos copias de cada etiqueta. Los valores eran
 * identicos y el HTML servido —que es lo que lee Google— siempre estuvo bien,
 * pero un canonical duplicado en el DOM lo marca cualquier auditoria.
 *
 * El efecto corre despues del commit, o sea cuando las etiquetas de React ya
 * existen: nunca queda un momento sin ninguna.
 */
export default function PrerenderedHeadCleanup() {
  useEffect(() => {
    document.head
      .querySelectorAll('[data-rh="true"]')
      .forEach((el) => el.remove());
  }, []);

  return null;
}
