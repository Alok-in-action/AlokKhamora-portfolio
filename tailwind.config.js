/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        primaryText: "#D7E2EA",
        mutedText: "rgba(215, 226, 234, 0.65)",
        whiteBg: "#FFFFFF",
        accentPurple: "#7621B0",
        accentMagenta: "#B600A8",
        accentOrange: "#BE4C00",
        borderColor: "rgba(215, 226, 234, 0.25)"
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
