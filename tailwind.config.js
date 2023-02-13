/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
const hexToRgb = require("hex-to-rgb")
const highlightColor = hexToRgb(colors.amber["200"]).join(",")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/*.{js,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow:{
        "surface-elevation-low":`
        inset 0.25px 1px 1px 0 rgba(${highlightColor}, 0.015), 
        0.3px 0.5px 0.7px rgba(3, 2, 2, 0.2),
        0.4px 0.8px 1px -1.2px rgba(3, 2, 2, 0.2),
        1px 2px 2.5px -2.5px rgba(3, 2, 2, 0.2);
        `
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: "class",
  theme:{
    extend:{
          colors:{
            gray:colors.stone,
          },
      }
    }
  }

