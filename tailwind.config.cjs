/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep, blue-tinted near-black canvas
        ink: {
          950: '#04050A',
          900: '#070811',
          800: '#0B0D19',
          700: '#121525',
          600: '#1B1F35',
          500: '#262B45',
        },
        // Signature violet/indigo brand ramp
        brand: {
          50: '#F1EFFF',
          100: '#E4E0FF',
          200: '#C9C1FF',
          300: '#A99CFF',
          400: '#8B79FF',
          500: '#6E5BFF',
          600: '#5A46F0',
          700: '#4A38CC',
          800: '#3B2DA0',
          900: '#2A2170',
        },
        // Cool aqua counter-accent
        aqua: {
          200: '#B6F6FF',
          300: '#7DF0FF',
          400: '#3EE0F5',
          500: '#22C9E0',
        },
        // Warm ember used sparingly for emphasis
        ember: {
          300: '#FFB38F',
          400: '#FF8A5B',
          500: '#FF6B3D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 30px 60px -30px rgba(0,0,0,0.85)',
        glow: '0 20px 60px -20px rgba(110,91,255,0.55)',
        'glow-sm': '0 10px 30px -12px rgba(110,91,255,0.5)',
        'glow-aqua': '0 20px 60px -22px rgba(34,201,224,0.5)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(6px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        shimmer: 'shimmer 2.5s infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        'accordion-up': 'accordion-up 0.25s ease-in',
      },
    },
  },
  plugins: [],
}
