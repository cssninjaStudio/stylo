/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: { max: '639px' },
        sm: '640px',
        md: '768px',
        lg: '1025px',
        xl: '1280px',
        xxl: '1536px',
        ptablet: {
          raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)',
        },
        ltablet: {
          raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)',
        },
      },
      colors: {
        slate: {
          1000: '#0a101f',
        },
        gray: {
          1000: '#080c14',
        },
        zinc: {
          1000: '#101012',
        },
        neutral: {
          1000: '#080808',
        },
        stone: {
          1000: '#0f0d0c',
        },
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
        muted: {
          50: 'rgb(var(--folio-color-muted-50) / <alpha-value>)',
          100: 'rgb(var(--folio-color-muted-100) / <alpha-value>)',
          200: 'rgb(var(--folio-color-muted-200) / <alpha-value>)',
          300: 'rgb(var(--folio-color-muted-300) / <alpha-value>)',
          400: 'rgb(var(--folio-color-muted-400) / <alpha-value>)',
          500: 'rgb(var(--folio-color-muted-500) / <alpha-value>)',
          600: 'rgb(var(--folio-color-muted-600) / <alpha-value>)',
          700: 'rgb(var(--folio-color-muted-700) / <alpha-value>)',
          800: 'rgb(var(--folio-color-muted-800) / <alpha-value>)',
          900: 'rgb(var(--folio-color-muted-900) / <alpha-value>)',
          // 1000: 'rgb(var(--folio-color-muted-1000) / <alpha-value>)',
        },
        primary: {
          50: 'rgb(var(--folio-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--folio-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--folio-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--folio-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--folio-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--folio-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--folio-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--folio-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--folio-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--folio-color-primary-900) / <alpha-value>)',
          // 1000: 'rgb(var(--folio-color-muted-1000) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.slimscroll::-webkit-scrollbar': {
          width: '6px',
        },
        '.slimscroll::-webkit-scrollbar-thumb': {
          borderRadius: '.75rem',
          background: 'rgba(0, 0, 0, 0.1)',
        },
        '.slimscroll-opaque::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0) !important',
        },
        '.mask': {
          'mask-size': 'contain',
          'mask-repeat': 'no-repeat',
          'mask-position': 'center',
        },
        '.mask-blob': {
          'mask-image':
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAweiIvPjwvc3ZnPg==')",
        },
      })
    }),
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    },
  ],
}
