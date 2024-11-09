/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#a388ee',
        mainAccent: '#9e66ff', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
  
        // light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',
  
        // dark mode
        darkBg: '#272733',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
      },
      borderRadius: {
        base: '6px'
      },
      boxShadow: {
        light: '2px 2px 0px 0px #000',
        dark: '2px 2px 0px 0px #000',
      },
      translate: {
        boxShadowX: '2px',
        boxShadowY: '2px',
        reverseBoxShadowX: '-2px',
        reverseBoxShadowY: '-2px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        // Anda bisa menambahkan variasi font lain jika diperlukan
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
}

