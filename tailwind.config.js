module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes:{
        "moving-text":{
          "0%": { 
            transform: "translate(-85%, 0)"
          },
          "100%": { 
            transform: "translate-x-[(80%, 0)]" 
          }
        },
        "moving-images":{
          "0%": { 
            transform: "translate(-63%, 0)"
          },
          "100%": { 
            transform: "translate-x-[(80%, 0)]" 
          }
        }
      },
      animation: {
        "moving-text": "moving-text 15s linear alternate-reverse infinite",
        "moving-images": "moving-images 8s linear alternate infinite"
      }
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}
