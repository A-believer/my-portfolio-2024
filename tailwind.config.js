/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
     bgColor: "var(--bg)"
    },
    colors: {
      textI: "var(--textI)",
      
    },
    extend: {},
  },
  plugins: [],
}