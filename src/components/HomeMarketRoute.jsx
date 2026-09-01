import { Navigate, useLocation } from "react-router-dom";

import App from "../App";
import { getCurrentMarket, getSavedManualMarket } from "../config/markets";

/**
 * Alinea la URL de "/" con el mercado que la persona ya eligio a mano.
 *
 * EL PROBLEMA QUE RESUELVE. El selector del header guarda la eleccion en
 * "credex_market_manual". Antes esa memoria cambiaba solo el CONTENIDO de "/":
 * la persona que habia elegido Peru abria https://www.credexapp.com/ y leia la
 * pagina de Peru bajo el title, el canonical y la description de Internacional.
 * La URL decia una cosa y la pagina decia otra, y GA4 reportaba la equivocada.
 *
 * QUE HACE. Si "/" resuelve a Internacional y hay un mercado guardado con ruta
 * propia, navega a esa ruta (/pe, /co, /ar) con replace, sin ensuciar el
 * historial. Desde ahi todo —contenido, title, canonical y URL— sale de la misma
 * ruta y no puede divergir.
 *
 * ESTO NO ES UN REDIRECT POR IP. No consulta geolocalizacion ni /api/geo: mueve
 * a la persona al lugar que ella misma eligio con un clic en el selector, y solo
 * a una ruta de este mismo sitio. La redireccion por IP se borro el 2026-08-29 y
 * no vuelve por aca.
 *
 * NO SE APLICA cuando:
 *   · el host o la ruta ya fijan un mercado (credex.cl, /pe, /co, /ar);
 *   · la URL trae ?market=, que es una eleccion explicita y mas reciente que la
 *     guardada. Sin esta excepcion, elegir "Internacional" en el selector
 *     rebotaria de vuelta al mercado anterior.
 */
export default function HomeMarketRoute() {
  const location = useLocation();
  const urlMarket = getCurrentMarket(location.pathname);

  const eleccionExplicita = new URLSearchParams(location.search).has("market");
  const saved = eleccionExplicita ? null : getSavedManualMarket();

  if (urlMarket.code === "GLOBAL" && saved && saved.path !== location.pathname) {
    return <Navigate to={{ pathname: saved.path, search: location.search }} replace />;
  }

  return <App />;
}
