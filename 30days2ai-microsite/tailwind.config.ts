import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#00d4ff',
          500: '#00b8e6',
          600: '#0099cc',
          700: '#007ab3',
          800: '#005b99',
          900: '#003d80',
        },
        lime: {
          50: '#f7ffe6',
          100: '#efffcc',
          200: '#dfff99',
          300: '#cfff66',
          400: '#a3ff12',
          500: '#8fe600',
          600: '#7acc00',
          700: '#66b300',
          800: '#529900',
          900: '#3d8000',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        pulseGlow: { 
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }, 
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.8)' } 
        },
        bounceSlow: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
    },
  },
  plugins: [],
};
export default config;
