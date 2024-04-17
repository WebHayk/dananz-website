/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3878",
        secondary: "#333333",
        tertiary: "#9C9C9C",
        placeholder: "#D9D9D9"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
          xl: "8rem"
        },
      },
    },
  },
  plugins: [],
}

