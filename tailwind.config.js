export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
 
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadein: "fadein 3s",
      },
    },
  },
  plugins: [],
};
