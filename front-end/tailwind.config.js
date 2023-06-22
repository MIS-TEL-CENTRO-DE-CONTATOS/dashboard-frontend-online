/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTel: "#F68B1F", // Substitua pelo valor da sua cor personalizada
        danger: "#FF3A29", // Substitua pelo valor da sua cor personalizada
        primary: "#AD0000", // Substitua pelo valor da sua cor personalizada
        success: "#34B53A", // Substitua pelo valor da sua cor personalizada
        info: "#02A0FC", // Substitua pelo valor da sua cor personalizada
        warning: "#FFB200", // Substitua pelo valor da sua cor personalizada
      },
      fontFamily: {
        sans: ['DM Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        regular: 500,
      },
    },
  },
  plugins: [],
});
