# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Redirects interinos

`vercel.json` es JSON estricto: no admite comentarios, y el esquema de Vercel declara
`additionalProperties: false` en cada regla de `redirects`, así que tampoco se puede
anotar con una clave extra. Esta sección cumple esa función.

Dos redirects apuntan a un destino **provisorio**. Su destino definitivo es la página
**Servicios de información**, que todavía no existe (D02, cerrada por Mario el
2026-08-28: se crea una página con las fuentes que Credex consulta).

| URL heredada | Destino hoy (interino) | Destino definitivo |
|---|---|---|
| `/poder-judicial/` | `/evaluacion-crediticia` | `/servicios-de-informacion` |
| `/servicios-de-informacion/` | `/evaluacion-crediticia` | `/servicios-de-informacion` |

**Cuando la página exista, reapuntar las cuatro reglas** (con y sin barra final) en
`vercel.json`. Mientras no exista, el 301 tiene que ir a una ruta que responda 200:
apuntar a una ruta inexistente sería un 301 hacia un 404, y este mismo repositorio ya
introdujo el 404 real, así que eso ahora sí ocurriría.

`/carpeta-tributaria/` **no** entra en este grupo: se queda en `/evaluacion-crediticia`
de forma definitiva. Decisión de Mario, 2026-08-28.

### Sobre el status code

`"permanent": true` hace que Vercel emita **308**, no 301. Google trata 308 y 301 igual
para transferencia de autoridad, pero conviene saberlo al verificar con `curl -I`: la
respuesta esperada es `308`.
