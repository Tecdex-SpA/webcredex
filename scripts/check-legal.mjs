/**
 * Impide que un texto legal en BORRADOR llegue a produccion (ORG-4).
 *
 * Vercel construye cada merge a main como produccion. Si este PR se fusiona antes
 * de que el juridico revise y Mario apruebe la politica de privacidad, el build
 * de produccion falla aca y produccion se queda en el deploy anterior. Los
 * previews si se construyen: son los que se usan para revisar el texto.
 *
 * Para aprobar: LEGAL_APROBADO = true en src/pages/Privacidad.jsx, sin ningun
 * [COMPLETAR] ni [VERIFICAR] pendiente, y quitar el noindex de /privacidad.
 */
import { readFileSync } from "node:fs";

const fuente = readFileSync(
  new URL("../src/pages/Privacidad.jsx", import.meta.url),
  "utf8",
);

const aprobado = /const LEGAL_APROBADO = true;/.test(fuente);
const pendientes = fuente.match(/\[(COMPLETAR|VERIFICAR)[^\]]*\]/g) || [];

if (aprobado && pendientes.length > 0) {
  throw new Error(
    `Privacidad.jsx dice estar aprobada pero tiene ${pendientes.length} marcas pendientes.`,
  );
}

if (process.env.VERCEL_ENV === "production" && !aprobado) {
  throw new Error(
    "La politica de privacidad sigue en BORRADOR (LEGAL_APROBADO = false). " +
      "No se despliega a produccion sin revision juridica y aprobacion de Mario.",
  );
}

console.log(
  aprobado
    ? "politica de privacidad: aprobada"
    : `politica de privacidad: BORRADOR (${pendientes.length} marcas pendientes; solo preview)`,
);
