/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0F12',
        surface: '#15181D',
        surface2: '#1C2027',
        line: '#272C33',
        paper: '#E9E6DD',
        muted: '#8B93A1',
        amber: '#F2C14E',
        cyan: '#5EC8D8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
