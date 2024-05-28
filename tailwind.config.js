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
        hero: "url('/img/hero.webp')",
        video:"url('/src/assets/images/video.mp4')",
        mrback: "url('/src/assets/images/Hero (1).png')",
        mrback1: "url('/src/assets/images/hero2.png')",
        supportbg: "url('/src/assets/images/image.png')",
        bgpatch: "url('/src/assets/images/bgpatch.png')",
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
      },
      fontFamily: {
        sans: ['"Futura PT"', ...defaultTheme.fontFamily.sans],
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
