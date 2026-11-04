/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        bg: '#F7F8FA',
        surface: '#FFFFFF',
        surfaceAlt: '#F3F5F7',
        line: '#E5E7EB',
        text: '#111827',
        dim: '#5F6F82',
        amber: '#E53935',
        teal: '#0EA5A4',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
