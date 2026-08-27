export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta de marca Credex. primary-500 es el naranjo oficial #EC6C20;
        // el resto es la escala derivada para hovers, fondos suaves y bordes.
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
        dark: "#1C2543",    // azul oscuro
        light: "#F6F8FB"
      },
      fontFamily: {
        sans: ["Comfortaa", "sans-serif"]
      }
    },
  },
  plugins: [],
}