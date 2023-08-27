/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#7D4F50",
        wine: "#653239",
        oldrose: "#CC8B86",
        lightpink: "#CDABBB",
        otherpink: "#CB9AB7",
        orangey: "#EA987E",
        pinkishpurple: "#956691",
        darkblue: "#3D325E",
        mainpink: "#CD4E55"
      },
    },
  },
  plugins: [],
  darkMode: "class",
}