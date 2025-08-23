/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. Définir les étapes de l'animation (les keyframes)
      keyframes: {
        blutx: {
          '0%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(4px)' },
        },
      },
      // 2. Créer une classe d'utilité pour cette animation
      animation: {
        blutx : 'blutx 1.5s infinite linear alternate'
      },
    },
  },
  plugins: [],
}
