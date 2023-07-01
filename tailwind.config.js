/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize:{
        "header-bg":"48px",
      "header-sm":"40px",
      "text-sm":"16px",
      "text-lg":"18px",
      "xx-sm":"12px",
      "mid":"23px",
      "header-mid":"25px"
      
      },
     width:{
      "500":"556px",
      "700":"781px",
      "450px":"450px"

     },
     margin:{
      "7rem":"7rem",
      "ctr":"14rem",
      "xxl":"50px",
      "30rem":"50rem"
     },
     colors:{
      "main-blue":"#005AE2",
      "neutral":"#5C6F7F"

     },
     screens:{
      "ms":"300px"


     }
    },
  },
  plugins: [],
}
