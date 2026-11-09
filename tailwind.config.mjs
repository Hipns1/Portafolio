/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        surface: {
          1: 'var(--surface-1)',
          2: 'var(--surface-2)',
          3: 'var(--surface-3)',
          card: 'var(--surface-card)',
        },
        hairline: {
          subtle: 'var(--hairline-subtle)',
          DEFAULT: 'var(--hairline)',
          strong: 'var(--hairline-strong)',
        },
        brand: {
          DEFAULT: '#6366f1',
          hover: '#818cf8',
          accent: '#0284c7', // Sky 600 in light, sky 400 in dark
          success: '#10b981',
          dotnet: '#512bd4',
          react: '#0284c7',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
          subtle: 'var(--ink-subtle)',
          tertiary: 'var(--ink-tertiary)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-brand': '0 0 35px -5px rgba(99, 102, 241, 0.25)',
        'glow-accent': '0 0 35px -5px rgba(56, 189, 248, 0.25)',
        'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
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
