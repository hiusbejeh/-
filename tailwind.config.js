/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#FFD700', // Example gold color, can be adjusted
        'brand-black': '#000000',
      },
    },
  },
  plugins: [],
}
