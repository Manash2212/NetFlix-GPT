/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      DM: ["DM Sans", "sans-serif"],
    },
    colors: {
      netRed: "#e50914",
      formBg: "#000000de",
      inputBg: "#1f293742",
      white: "white",
      lightGray: "#f9fafb1f",
      grayTranse: "#9ca3af75",
      blue: "#1e40af",
      black: "black",
      alphaWhite: "#bebdbd4d",
    },
  },
  plugins: [],
};
