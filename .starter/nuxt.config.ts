export default defineNuxtConfig({
  extends: '../',

  runtimeConfig: {
    public: {
      siteUrl: 'https://stylo-starter.cssninja.io/',
      siteName: 'Stylô Starter',
      siteDescription: '',
      language: 'en-US',
      titleSeparator: '·',
      studio: {
        tokens: '',
      },
    },
  },
})