export default defineNuxtConfig({
  extends: '../',

  experimental: {
    viewTransition: true,
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://stylo-cooking.cssninja.io/',
      siteName: 'Bakery',
      siteDescription: '',
      language: 'en-US',
      titleSeparator: '·',
    },
  },
})