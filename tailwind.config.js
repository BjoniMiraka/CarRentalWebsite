/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "smooth-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
      },
      animation: {
        "smooth-scroll": "smooth-scroll 30s linear infinite",
      },
      colors: {
        blue: {
          50: "#F7FBFF",
          100: "#1572D3",
        },
        black: {
          25: "#383838",
          50: "#333",
          100: "#272727",
        },

        gray: {
          50: "#F7FBFF",
        },
      },
    },
  },
  plugins: [],
};
