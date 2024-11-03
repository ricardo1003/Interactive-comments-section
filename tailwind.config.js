/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ModerateBlue: "hsl(238, 40%, 52%)",
        SoftRed: "hsl(358, 79%, 66%)",
        LightGrayishBlue: "hsl(239, 57%, 85%)",
        PaleRed: "hsl(357, 100%, 86%)",

        DarkBlue: "hsl(212, 24%, 26%)",
        GrayishBlue: "hsl(211, 10%, 45%)",
        LightGray:" hsl(223, 19%, 93%)",
        VeryLightGray: "hsl(228, 33%, 97%)",
      },
      backgroundImage: {
        plusButton: "../src/assets/images/icon-plus.svg",
        minusBUtton: "../src/assets/images/icon-minus.svg",
      },
      screens:{
        "max-tn": {max: "603px"},
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}

