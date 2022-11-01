/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: {
        main: "#0079FF",
        light: "#60ABFF",
      },
      text: {
        primary: {
          light: "#FFFFFF",
          dark: "#2B3442",
        },
        secondary: "#4B6A9B",
        tertiary: "#697C9A",
      },
      background: {
        main: {
          light: "#F6F8FF",
          dark: "#141D2F",
        },
        paper: {
          light: "#FEFEFE",
          dark: "#1E2A47",
        },
      },
      error: "#F74646",
    },
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        mono: "Space Mono",
      },
    },
  },
  plugins: [],
};
