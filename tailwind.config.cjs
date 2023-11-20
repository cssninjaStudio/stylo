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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
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
          50: 'rgb(var(--color-muted-50) / <alpha-value>)',
          100: 'rgb(var(--color-muted-100) / <alpha-value>)',
          200: 'rgb(var(--color-muted-200) / <alpha-value>)',
          300: 'rgb(var(--color-muted-300) / <alpha-value>)',
          400: 'rgb(var(--color-muted-400) / <alpha-value>)',
          500: 'rgb(var(--color-muted-500) / <alpha-value>)',
          600: 'rgb(var(--color-muted-600) / <alpha-value>)',
          700: 'rgb(var(--color-muted-700) / <alpha-value>)',
          800: 'rgb(var(--color-muted-800) / <alpha-value>)',
          900: 'rgb(var(--color-muted-900) / <alpha-value>)',
          1000: 'rgb(var(--color-muted-1000) / <alpha-value>)',
        },
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        },
      },
      typography: ({ theme }) => ({
        muted: {
          css: {
            '--tw-prose-body': theme('colors.muted[700]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-headings': theme('colors.muted[900]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-lead': theme('colors.muted[600]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-links': theme('colors.muted[900]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-bold': theme('colors.muted[900]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-counters': theme('colors.muted[500]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-bullets': theme('colors.muted[300]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-hr': theme('colors.muted[200]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-quotes': theme('colors.muted[900]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-quote-borders': theme('colors.muted[200]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-captions': theme('colors.muted[500]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-code': theme('colors.muted[900]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-pre-code': theme('colors.muted[200]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-pre-bg': theme('colors.muted[800]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-th-borders': theme('colors.muted[300]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-td-borders': theme('colors.muted[200]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-body': theme('colors.muted[300]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.muted[400]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.muted[400]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-bullets': theme('colors.muted[600]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-hr': theme('colors.muted[700]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-quotes': theme('colors.muted[100]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-quote-borders': theme(
              'colors.muted[700]',
            ).replace('<alpha-value>', 100),
            '--tw-prose-invert-captions': theme('colors.muted[400]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-code': theme('colors.white').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-pre-code': theme('colors.muted[300]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.muted[600]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-td-borders': theme('colors.muted[700]').replace(
              '<alpha-value>',
              100,
            ),
          },
        },
        primary: {
          css: {
            '--tw-prose-links': theme('colors.primary[600]').replace(
              '<alpha-value>',
              100,
            ),
            '--tw-prose-invert-links': theme('colors.primary[500]').replace(
              '<alpha-value>',
              100,
            ),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
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
  ],
}
