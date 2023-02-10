/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Fredoka: ['"Fredoka"', "sans-serif"],
      DmSans: ['"DM Sans"', "sans-serif"]
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
    },
    extend: {
      colors: {
        "tdf-blue": {
          // 50: "#048ABF",
          50: "#4169e1",
          100: "#0367A6",
          200: "#048ABF",
          300: "#023E73",
          400: "#173F73",
          500: "#0477BF"
        },
        "tdf-bg": "#f5f2eb",
        primary: "#06103c",


      },
      backgroundImage: {
        "woman-bg": "url('./assets/images/charity-for-woman-2.jpg')",
        "hero-bg": "url('./assets/hero/hero-bg.svg')",
        "about-shape1": "url('./assets/about/about-shape-1.png')",
        "section-bg": "url('./assets/section/section-shape-bg.svg')",
        "cta-bg": "url('./assets/cta/cta-content_top-bg.jpg')",
        "cta-bg2": "url('./assets/cta/cta-pattern.jpg ') ",
        "section-bg-lg": "url('./assets/section/section-bg.jpg')"
      },
      rotate: {
        '360': '360deg'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fadeInAndBounce': 'fadeIn 3s ease-out',
      }
    },
  },
  plugins: [],
};
