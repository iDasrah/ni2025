/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-personality-calm',
    'bg-personality-energetic',
    'bg-personality-dark',
    'bg-personality-fun',
    'bg-personality-serpent',
    'personality-selected'
  ],
  theme: {
    extend: {
      colors: {
        'nird-blue': '#2563eb',
        'nird-green': '#059669',
        'nird-purple': '#7c3aed',
        'nird-orange': '#ea580c',
      },
    },
  },
  plugins: [],
}
