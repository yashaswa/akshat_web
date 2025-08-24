export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgMove: {
          "0%": { transform: "scale(1.1) translate(0, 0)" },
          "50%": { transform: "scale(1.1) translate(-20px, -20px)" },
          "100%": { transform: "scale(1.1) translate(0, 0)" },
        },
      },
      animation: {
        bgMove: "bgMove 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
