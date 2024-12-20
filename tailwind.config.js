/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Añade esta línea para habilitar el modo oscuro basado en clases
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}