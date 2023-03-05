import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['nuxt-seo-kit'],
  modules: [
    '@vueuse/nuxt',
    'pinceau/nuxt',
    '@nuxthq/studio',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-config-schema',
    'nuxt-icon',
  ],

  css: [resolve('./styles/utilities.css'), resolve('./styles/main.css')],
  colorMode: {
    classSuffix: '',
  },

  content: {
    documentDriven: true,
  },

  pinceau: {
    configFileName: 'tokens.config',
    preflight: false,
    studio: true,
  },
})
