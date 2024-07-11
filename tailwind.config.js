/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-pic1': "url('/assets/images/background/pic1.png')",
        'gallery-grid-pic1': "url('/assets/images/gallery/grid/pic1.jpg')",
        'gallery-grid-pic2': "url('/assets/images/gallery/grid/pic2.jpg')",
        'gallery-grid-pic3': "url('/assets/images/gallery/grid/pic3.jpg')",
        'gallery-grid-pic4': "url('/assets/images/gallery/grid/pic4.jpg')",
        'banner1': "url('/assets/images/banner/bnr4.jpg')",
        'banner4': "url('/assets/images/banner/bnr1.jpg')",
      },
    },
    //  extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      // container:{
      //   center:true,
      //   padding:"15px",
      // }
    //  },
    
  },
  plugins: [],
};
