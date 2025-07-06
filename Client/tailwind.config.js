/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      colors: {
        main: "#0033FF",
        error: "#ee3131",
      },
      keyframes: {
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-out",
      },
    },
  },
  plugins: [scrollbar],
};
