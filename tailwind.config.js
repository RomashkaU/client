/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ['./src/**/*.{js,jsx}'],
   theme: {
     extend: {
       screens: {
         xs: '480px',
         sm: '640px',
         md: '768px',
         md2: '990px',
         lg: '1024px',
         xl: '1192px',
         xxl: '1300px',
       },
       colors: {
         primary: '#0E1112',
         grey: '#484B4B',
         accent: '#EEF7F9',
         instagram: '#f06a82',
         whatsapp: '#56f791',
         facebook: '#1877F2',
       },
       backgroundImage: {
         home: "url('./img/home/mainwithlogoscale.jpg')",
         about: "url('./img/about/about.jpg')",
         mobilenav: "url('./img/mobile.jpg')",
         maping: "url('./img/home/maping2.png')",
         contact: "url('./img/contact/contact2.jpg')",
         fleet1: "url('./img/fleet/road1.jpg')",
         fleet2: "url('./img/fleet/road2.jpg')",
         fleet3: "url('./img/fleet/road3.jpg')",
         fleet4: "url('./img/fleet/road4.jpg')",
         fleet5: "url('./img/fleet/road5.jpg')",
         fleet6: "url('./img/fleet/road6.jpg')",
         solution1: "url('./img/solution/solution1.jpg')",
         solution2: "url('./img/solution/solution2.jpg')",
         solution3: "url('./img/solution/solution3.jpg')",
         solution4: "url('./img/solution/solution4.jpg')",
         owner: "url('./img/owner/main.jpg')",
        },
       fontFamily: {
         inter: ['Inter var', 'sans-serif'],
         primary: 'Playfair Display',
         secondary: 'Mulish',
       },
       boxShadow: {
         card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
         cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
       },
     },
   },
   plugins: [],
 };