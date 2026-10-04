/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          bg: '#F5F5F3',
          card: '#FFFFFF',
          dark: '#111111',
          muted: '#666666',
          subtle: '#888888',
          border: 'rgba(0, 0, 0, 0.07)',
          borderLight: 'rgba(0, 0, 0, 0.04)',
          lime: '#B8F23A',
          limeHover: '#a6e228',
          limePale: '#EAF8D2',
          limeSoft: '#F4FBEA',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        handwritten: ['"Caveat"', '"Reenie Beanie"', 'cursive'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'subtle': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'float': '0 20px 45px -10px rgba(0, 0, 0, 0.07)',
        'lime-glow': '0 10px 25px -5px rgba(184, 242, 58, 0.4)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap, 1rem)))' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        marquee: 'marquee var(--duration, 30s) linear infinite',
        'border-beam': 'border-beam calc(var(--duration, 15) * 1s) infinite linear',
        'shimmer-slide': 'shimmer-slide var(--speed, 3s) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed, 3s) * 2) infinite linear',
      }
    },
  },
  plugins: [],
}
