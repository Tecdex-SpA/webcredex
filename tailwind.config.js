export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial del brand book (46_FICHA_MARCA_CREDEX.md, secciones 06 y 07).
        //
        // primary-500 es el naranjo oficial #EC6C20; el resto de la escala es
        // derivada, para hovers, fondos suaves y bordes. Se mantiene como escala
        // y no como color plano porque el codigo usa primary-100/300/400/500/600.
        primary: {
          50: "#FEF4EF",
          100: "#FCE8DC",
          200: "#F9CFB6",
          300: "#F5B087",
          400: "#F08E53",
          500: "#EC6C20",
          600: "#CD5711",
          700: "#A7470E",
          DEFAULT: "#EC6C20",
        },

        // Principales
        dark: "#1C2541",     // azul Credex. Corregido: el codigo tenia #1C2543
        sky: "#B5E2FA",      // celeste claro

        // Secundarios: graficas, esquemas, infografias y tablas
        cream: "#F2EBD6",
        steel: "#3A506B",
        skyLight: "#8DB9E4",
        // El manual lo llama "Gris". No se puede registrar como `gray` sin
        // reemplazar la escala gris de Tailwind, que el sitio usa en 163 lugares
        // (gray-50 a gray-900). Se registra con nombre propio.
        graphite: "#6E7271",
      },
      fontFamily: {
        // El manual pide Lemon Milk (titulos) y Ebrima (cuerpo), y reserva
        // Comfortaa para textos cortos y destacados. No se cambia aqui: ninguna
        // de las tres se carga hoy y las dos primeras dependen de D16
        // (licencia de uso web). Este PR corrige solo la paleta.
        sans: ["Comfortaa", "sans-serif"]
      }
    },
  },
  plugins: [],
}
