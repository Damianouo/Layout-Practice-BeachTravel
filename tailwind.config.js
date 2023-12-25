/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{html,js,jsx}",
    "./src/pages/**/*.{html,js,jsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        prima: "#0b1d26",
        sec: "#FFDB01",
      },
      fontFamily: {
        ibm: ['"IBM Plex Sans"', "Sans"],
        nunito: ['"Nunito"', "Sans"],
      },
      backgroundImage: {
        hero: "linear-gradient(0deg, rgba(11,29,38,1) 10%, rgba(255,255,255,0.1) 100% ), url('./src/assets/pascal.jpeg')",
        content: "linear-gradient(0deg,rgba(11,29,38,1) 80%, transparent 120%)",
      },
    },
  },
  plugins: [],
};
