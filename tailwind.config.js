module.exports = {
  purge: [],
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    fill: {
      current: 'currentColor',
    },
    screens: {
     'xs': '320px',
      // => @media (min-width: 360px) { ... }
     'sm': '640px',
     // => @media (min-width: 640px) { ... }

     'md': '768px',
     // => @media (min-width: 768px) { ... }

     'lg': '1024px',
     // => @media (min-width: 1024px) { ... }

     'xl': '1280px',
     // => @media (min-width: 1280px) { ... }

     'xxl': '1536px',
     // => @media (min-width: 1536px) { ... }
   }
  },
  variants: {
    extend: {
    animation: ['motion-safe'],
    },
  },
  plugins: [],
}