/**
 * Responde 410 Gone para las URLs heredadas que no tienen ni tendran
 * equivalente en el sitio actual (ver 37_MAPA_REDIRECTS_MIGRACION.csv).
 *
 * Motivo: "redirects" de vercel.json solo emite 3xx. Un 404 haria que Google
 * reintente la URL durante meses; el 410 le dice que deje de intentar.
 *
 * Las rutas que llegan aca se declaran como "rewrites" en vercel.json, de modo
 * que la URL original se conserva y el status de esta funcion es el de la
 * respuesta.
 */
export default function handler(request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
  response.setHeader("X-Robots-Tag", "noindex");
  response.status(410).send(
    `<!doctype html>
<html lang="es-CL">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <title>Página retirada | Credex</title>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    <style>
      :root { --dark:#1C2543; --primary:#EC6C20; --light:#F6F8FB; }
      body {
        margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center;
        background:var(--light); color:var(--dark);
        font-family:"Comfortaa",system-ui,-apple-system,"Segoe UI",sans-serif;
        padding:2rem; text-align:center;
      }
      main { max-width:32rem; }
      .code { font-size:.875rem; letter-spacing:.18em; text-transform:uppercase; color:var(--primary); margin:0 0 1rem; }
      h1 { font-size:1.75rem; margin:0 0 1rem; }
      p { color:#4b5563; line-height:1.6; margin:0 0 2rem; }
      a { display:inline-block; background:var(--primary); color:#fff; text-decoration:none;
          padding:.85rem 1.75rem; border-radius:.75rem; font-weight:600; }
    </style>
  </head>
  <body>
    <main>
      <p class="code">Error 410</p>
      <h1>Esta página fue retirada</h1>
      <p>El contenido que buscaba ya no forma parte del sitio y no será restituido.</p>
      <a href="/">Ir al inicio</a>
    </main>
  </body>
</html>
`,
  );
}
