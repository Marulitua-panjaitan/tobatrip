/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'danau-blue': '#3B82F6',
        'toba-teal': '#14B8A6',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'toba': '20px',
      }
    },
  },
  plugins: [],
}