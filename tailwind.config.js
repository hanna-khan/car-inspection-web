/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#253745",
        secondary: "#11212d",
        accent: "#4a5c6a",
        background: "#fff",
        dropdownBg: "#2d3239",
        hoverBg: "#11212d",
        textPrimary: "#253745",
        textSecondary: "#4a5c6a",
        textHover: "#9ba8ab",
      },
    },
  },
  plugins: [],
};
