/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    colors: {
      royal: "#172339",
      ashyBlue: "#49566D",
      cream: "#F3EDE7",
      offWhite: "#FAF8F6",
      hotPurp: "#A060FF",
      hotPink: "#CB30E3",
      hotOrange: "#FFA84E",
    },
    extend: {
      backgroundImage: {
        "hero-bg-lg": "url('assets/images/image-hero-portrait@2x.webp')",
        "hero-bg-md": "url('assets/images/image-hero-portrait.webp')",
        "hero-bg-sm": "url('assets/images/image-hero-landscape.webp')",
      },
      fontFamily: {
        epilogueReg: ['epilogueReg', 'sans-serif'],
        epilogueBold: ['epilogueBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
