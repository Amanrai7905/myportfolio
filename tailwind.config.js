/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1120',
        surface: '#121B2E',
        surfaceAlt: '#1A2439',
        line: '#26314A',
        text: '#E7EAF2',
        dim: '#8C97B2',
        amber: '#E8A33D',
        teal: '#3FC9B0',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
