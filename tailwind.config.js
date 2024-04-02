/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      bgColor: "var(--bg)",
      bgColorI: "var(--textI)",
      bgColorII: "var(--textII)",

      
    },
    colors: {
      text: "var(--bg)",
      textI: "var(--textI)",
      textII: "var(--textII)",
      bdr: "var(--border)"
      
    },
    extend: {},
  },
  plugins: [],
}