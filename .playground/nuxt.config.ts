export default defineNuxtConfig({
  extends: '../',
  
  typescript: {
    shim: false,
    strict: true,
    includeWorkspace: true
  },

  content: {
    highlight: {
      preload: ['vue', 'vue-html', 'typescript', 'bash', 'diff', 'scss'],
      theme: {
        default: 'one-dark-pro',
        dark: 'one-dark-pro',
      },
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://folio.cssninja.io/',
      siteName: 'Folio',
      siteDescription: '',
      language: 'en-US',
      titleSeparator: '·',
      content: {
        anchorLinks: {
          depth: 6,
        },
      },
    },
  },
})