/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      backgroundImage: {
        hero: "url('https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717180584/hero_w75tmm.webp')",
        video:
          "url('https://res.cloudinary.com/dfzcr2ch4/video/upload/f_auto:video,q_auto/m2qegasybx2ts0picyhh')",
        mrback:
          "url('https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173137/Hero_1_v7qidt.webp')",
        mrback1:
          "url('https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173132/hero2_olqlpn.webp')",
        supportbg:
          "url('https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173117/Image_w7qty5.webp')",
        faqtab:
          "url('https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717433825/Image_1_cqkad8.webp')",
        bgpatch:
          "url('https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173211/bgpatch_nvhjfc.webp')",
        bgpatch1:
          "url('https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717482718/Image_1_1_ifmi0t.webp')",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      borderRadius: {
        '4xl': '30px',
      },
      colors: {
        'custom-dark': '#0A0917',
        'custom-light': 'rgba(68, 87, 184, 0.30)',
        'tab-bg': '#21295C',
        'custom-fade': '#fff',
      },
      fontFamily: {
        sans: ["'Futura PT'", '"Nunito"', ...defaultTheme.fontFamily.sans],
        serif: ["'Colus'", ...defaultTheme.fontFamily.serif],
        ancient: ['"Font-The Ancient"', ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
