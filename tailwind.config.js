/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sumi: "#090909",      // negro Daruma - fondo oscuro y texto
        washi: "#FFFFFF",     // blanco - fondo claro y lectura
        hanko: "#C42B26",     // rojo Daruma - único acento de marca
        whatsapp: "#25D366",  // verde oficial - exclusivo del botón de WhatsApp
      },
      fontFamily: {
        display: ["'Shippori Mincho'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        sm2: "2px",
      },
    },
  },
  plugins: [],
};
