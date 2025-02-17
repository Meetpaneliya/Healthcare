/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(255, 255, 255, 0.05)'
        },
        background: 'rgba(236, 242, 255, 0.8)',
        'background-dark': 'rgba(15, 23, 42, 0.9)',
        foreground: '#1e293b',
        'foreground-dark': '#f8fafc',
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8'
        },
        secondary: {
          DEFAULT: '#4f46e5',
          dark: '#4338ca'
        },
        accent: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7'
        },
        success: {
          DEFAULT: '#22c55e',
          dark: '#16a34a'
        },
        warning: {
          DEFAULT: '#eab308',
          dark: '#ca8a04'
        },
        error: {
          DEFAULT: '#ef4444',
          dark: '#dc2626'
        },
        surface: {
          light: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(30, 41, 59, 0.8)'
        },
        'surface-hover': {
          light: 'rgba(255, 255, 255, 1)',
          dark: 'rgba(30, 41, 59, 0.9)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass-light': '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)',
        'glass-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)'
      },
      backdropBlur: {
        'glass': '12px'
      }
    },
  },
  plugins: [],
};