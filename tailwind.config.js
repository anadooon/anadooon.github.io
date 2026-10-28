/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060709',
          900: '#0b0c10',
          850: '#111318',
          800: '#171a22',
          700: '#222734',
          600: '#32394c',
        },
        chrome: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
        amp: {
          glow: '#ff5c00', // Valve amplifier heater orange
          cyan: '#00f0ff', // Cyber neon cold frequency
          volt: '#a3e635', // Signal level green
        }
      },
      fontFamily: {
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'metallic': '0 0 0 1px rgba(255, 255, 255, 0.12), 0 8px 24px -4px rgba(0, 0, 0, 0.6)',
        'metallic-hover': '0 0 0 1px rgba(255, 255, 255, 0.3), 0 16px 36px -4px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(226, 232, 240, 0.2)',
        'metallic-light': '0 0 0 1px rgba(15, 23, 42, 0.08), 0 12px 28px -4px rgba(15, 23, 42, 0.08)',
        'metallic-light-hover': '0 0 0 1px rgba(15, 23, 42, 0.2), 0 18px 36px -6px rgba(15, 23, 42, 0.12)',
        'inner-bevel': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 0 rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'brushed-metal': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.05) 100%)',
        'chrome-grad': 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 45%, #64748b 55%, #e2e8f0 100%)',
        'silver-sheen': 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 18s linear infinite',
      }
    },
  },
  plugins: [],
}
