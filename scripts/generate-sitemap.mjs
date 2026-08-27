/**
 * Genera public/sitemap.xml leyendo las rutas declaradas en src/main.jsx.
 *
 * Motivo: el sitemap anterior estaba escrito a mano y no coincidia con el
 * router (declaraba 9 URLs, omitia /blog y sus 5 articulos). Al derivarlo del
 * router, ambos no pueden volver a divergir.
 *
 * Ambito: solo www.credex.cl. Las rutas de mercado (/pe, /co, /ar) pertenecen
 * a credexapp.com y quedan fuera hasta que se resuelva que dominio es canonico
 * para cada mercado (decision D01 del proyecto de marketing).
 */
import { readFileSync, writeFileSync } from "node:fs";

const ORIGIN = "https://www.credex.cl";

// Rutas que no van al sitemap de credex.cl
const EXCLUIDAS = new Set(["*", "/cl", "/pe", "/co", "/ar"]);

const prioridad = (ruta) => {
  if (ruta === "/") return "1.0";
  if (ruta.startsWith("/blog/")) return "0.6";
  if (ruta === "/blog") return "0.7";
  if (ruta.startsWith("/corfo-")) return "0.8";
  return "0.9";
};

const router = readFileSync(new URL("../src/main.jsx", import.meta.url), "utf8");
const rutas = [...router.matchAll(/path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((r) => !EXCLUIDAS.has(r));

if (rutas.length === 0) {
  throw new Error("No se encontraron rutas en src/main.jsx: revisar el parser.");
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...rutas.map(
    (r) =>
      `  <url>\n    <loc>${ORIGIN}${r === "/" ? "/" : r}</loc>\n` +
      `    <priority>${prioridad(r)}</priority>\n  </url>`,
  ),
  "</urlset>",
  "",
].join("\n");

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml generado desde el router: ${rutas.length} URLs`);
