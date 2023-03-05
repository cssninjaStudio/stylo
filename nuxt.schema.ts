export default defineNuxtSchema({
  appConfig: {
    /**
     * Stylô theme configuration.
     *
     * @studioIcon material-symbols:docs
     */
    stylo: {
      /**
       * Website title, used as header default title and meta title.
       *
       * @studioIcon material-symbols:title
       */
      title: 'Stylô',
      /**
       * Header configuration.
       *
       * @studioIcon fluent:document-header-24-regular
       */
      header: {
        displayTitle: true,
        logo: {
          src: '',
          srcDark: '',
          alt: '',
        },
      },
      footer: {
        action: {
          enabled: true,
          title: 'Subscribe to our Newsletter',
          text: 'Keep up with the latest news, updates and exclusive content by subscribing to our newsletter!',
          link: {
            href: '#',
            text: 'Subscribe',
            target: '',
            rel: '',
          },
        },
        logo: {
          src: '',
          srcDark: '',
          alt: '',
        },
        copyright: {
          enabled: false,
          text: '',
          href: '',
          rel: '',
          target: '',
        },
        social: {
          $schema: {
            type: 'array',
            items: {
              type: 'object',
              required: ['icon', 'href'],
              properties: {
                icon: { type: 'string' },
                href: { type: 'string' },
                title: { type: 'string' },
                rel: { type: 'string' },
                target: { type: 'string' },
              },
            },
          },
        },
        links: {
          $schema: {
            type: 'array',
            items: {
              type: 'object',
              required: ['text', 'href'],
              properties: {
                text: { type: 'string' },
                href: { type: 'string' },
                rel: { type: 'string' },
                target: { type: 'string' },
              },
            },
          },
        },
      },
    },
  },
})
