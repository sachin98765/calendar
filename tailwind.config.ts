import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#1e88e5',
        'light-blue': '#e3f2fd',
        'gray-light': '#f5f5f5',
      },
      keyframes: {
        'flip-in': {
          '0%': { transform: 'rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0)', opacity: '1' }
        },
        'date-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'flip-in': 'flip-in 0.6s ease-out',
        'date-hover': 'date-hover 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      }
    },
  },
  plugins: [],
}
export default config

