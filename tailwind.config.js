/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/**/*.{html,js,jsx}', './src/pages/**/*.{html,js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        prima: '#0b1d26',
        sec: '#fbd784',
      },
      fontFamily: {
        ibm: ['"IBM Plex Sans"', 'Sans'],
        nunito: ['"Nunito"', 'Sans'],
      },
    },
  },
  plugins: [],
};
