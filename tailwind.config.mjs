// tailwind.config.mjs
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Vite standard
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
      },
    },
  },
  plugins: [],
};