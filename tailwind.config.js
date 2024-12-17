import plugin from "tailwindcss/plugin";
import tailwindcssImageRendering from "tailwindcss-image-rendering";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      squircleRadius: {
        sm: "2px",
        md: "4px",
        lg: "6px",
        xl: "8px",
        "2xl": "12px",
        "3xl": "16px",
        "4xl": "24px",
      },
      squircleSmooth: {
        sm: "0.2",
        md: "0.6",
        lg: "0.8",
        xl: "1",
      },
    },
  },
  plugins: [
    tailwindcssImageRendering(), // Added safely with ES module import

    // Squircle Radius Utilities
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "squircle-radius": (value) => ({
            "--squircle-radius": value,
          }),
        },
        { values: theme("squircleRadius") },
      );
    }),

    // Squircle Smooth Utilities
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "squircle-smooth": (value) => ({
            "--squircle-smooth": value,
          }),
        },
        { values: theme("squircleSmooth") },
      );
    }),

    // Squircle Mask Utility
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".squircle": {
          "-webkit-mask-image": "paint(squircle)",
          "mask-image": "paint(squircle)",
        },
      });
    }),
  ],
};
