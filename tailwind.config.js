module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes:{
        "moving-text":{
          "0%": { 
            transform: "translate-x-[(100%, 0)]"
          },
          "100%": { 
            transform: "translate(-100%, 0)" 
          }
        }
      },
      animation: {
        "moving-text": "moving-text 18s linear infinite"
      }
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}
