/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      'medical-blue': '#0D47A1',
      'medical-dark-blue': '#0A3A7C',
      'medical-light-blue': '#1565C0',
      'pharmacy-green': '#10B981',
      'pharmacy-light-green': '#34D399',
      'dark-navy': '#1F2937',
      'light-off-white': '#F9FAFB',
      'red': {
        50: '#fef2f2',
        600: '#dc2626',
      },
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui', 'avenir', 'helvetica', 'arial', 'sans-serif'],
    },
    fontSize: {
      'display-lg': ['3.5rem', { lineHeight: '1.1' }],
      'display': ['3rem', { lineHeight: '1.2' }],
      'heading-lg': ['2.25rem', { lineHeight: '1.3' }],
      'heading': ['1.875rem', { lineHeight: '1.4' }],
      'subheading': ['1.25rem', { lineHeight: '1.5' }],
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    },
    spacing: {
      '0': '0px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '17': '4.25rem',
      '18': '4.5rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
    },
    animation: {
      'fade-up': 'fadeUp 0.8s ease-out forwards',
      'fade-in': 'fadeIn 0.6s ease-out forwards',
      'scale-in': 'scaleIn 0.6s ease-out forwards',
      'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      fadeUp: {
        'from': {
          opacity: '0',
          transform: 'translateY(20px)',
        },
        'to': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      fadeIn: {
        'from': {
          opacity: '0',
        },
        'to': {
          opacity: '1',
        },
      },
      scaleIn: {
        'from': {
          opacity: '0',
          transform: 'scale(0.95)',
        },
        'to': {
          opacity: '1',
          transform: 'scale(1)',
        },
      },
      pulse: {
        '0%, 100%': {
          opacity: '1',
        },
        '50%': {
          opacity: '.5',
        },
      },
    },
    backdropBlur: {
      'sm': '4px',
    },
    extend: {},
  },
  plugins: [],
}
