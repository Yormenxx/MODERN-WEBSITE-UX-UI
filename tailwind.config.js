const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
  
};

function addVariablesForColors({ addBase, theme }) {
  // Obtener todos los colores de la paleta
  const allColors = theme("colors");

  // Crear variables CSS personalizadas
  const newVars = {};
  for (const [colorName, colorValue] of Object.entries(allColors)) {
    if (typeof colorValue === "string") {
      newVars[`--color-${colorName}`] = colorValue;
    } else if (typeof colorValue === "object") {
      for (const [shade, hex] of Object.entries(colorValue)) {
        newVars[`--color-${colorName}-${shade}`] = hex;
      }
    }
  }

  // Agregar las variables al `:root`
  addBase({
    ":root": newVars,
  });
}