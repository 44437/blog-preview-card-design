/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        c_blue: "#D5E1EF",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      lineHeight: {
        120: "120%",
        140: "140%",
      },
      letterSpacing: {
        0.2: "0.2px",
      },
    },
  },
  plugins: [],
};
