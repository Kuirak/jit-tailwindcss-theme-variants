const { themeVariants } = require("tailwindcss-theme-variants");
const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.warmGray,
      teal: colors.teal,
      black: colors.black,
      amber: colors.amber
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    themeVariants({
      themes: {
        dark: {
          selector: ".dark-theme",
        },
      },
    }),
  ],
};
