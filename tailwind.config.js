/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vic: {
          navy: "#123042",
          green: "#4CD964",
          dark: "#1a1a1a",
          muted: "#f5f5f5"
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'blob': '42% 58% 70% 30% / 45% 45% 55% 55%',
      }
    },
  },
  plugins: [],
}