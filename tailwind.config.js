module.exports = {
  purge: ["./pages/**/*.{js, ts, jsx, tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  important: true,
  mode: 'jit',
  content: ["./app/**/*.{js,ts,jsx,tsx}", 
  "./public/**/*.{js,ts,jsx,tsx}", 
  "./components/**/*.{js,ts,jsx,tsx}", ],

  
  theme: {
     extend: {
       backgroundImage: {
         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
         'gradient-conic':
           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
       },
     },
  },
  plugins: [],
 }