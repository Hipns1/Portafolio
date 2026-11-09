/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#030407',
        surface: {
          1: '#0d0e12',
          2: '#13151b',
          3: '#1a1c24',
          card: 'rgba(17, 19, 27, 0.75)',
        },
        hairline: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          DEFAULT: 'rgba(255, 255, 255, 0.12)',
          strong: 'rgba(255, 255, 255, 0.20)',
        },
        brand: {
          DEFAULT: '#6366f1', // Indigo / lavender Linear style
          hover: '#818cf8',
          accent: '#38bdf8', // Cyan for full stack & links
          success: '#10b981', // Emerald for active status
          dotnet: '#512bd4',
          react: '#00d8ff',
        },
        ink: {
          DEFAULT: '#f7f8f8',
          muted: '#d0d6e0',
          subtle: '#8a8f98',
          tertiary: '#62666d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-brand': '0 0 35px -5px rgba(99, 102, 241, 0.25)',
        'glow-accent': '0 0 35px -5px rgba(56, 189, 248, 0.25)',
        'spotlight': '0 0 50px -10px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
