/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        flow: {
          black: '#000000',
          charcoal: '#0C0C0C',
          'charcoal-light': '#0D0D0D',
          'charcoal-lighter': '#101010',
          white: '#FFFFFF',
          'white-dim': '#E5E5E5',
          'white-soft': '#CCCCCC',
          'text-primary': '#FFFFFF',
          'text-secondary': '#CCCCCC',
        },
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #CCCCCC, #E5E5E5, #FFFFFF)',
      },
      borderRadius: {
        'flow': '20px',
        'flow-lg': '24px',
        'flow-xl': '28px',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(13, 95, 169, 0.35)',
      },
    },
  },
  plugins: [],
}

