/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        c_black_shadow: "0 8px 8px 0 rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      lineHeight: {
        150: "150%",
      },
      letterSpacing: {
        0.2: "0.2px",
      },
    },
  },
  plugins: [],
};
