export default defineNuxtSchema({
  appConfig: {
    /**
     * stylo theme configuration.
     *
     * @studio-icon material-symbols:docs
     */
    stylo: {
      title: 'Stylô',
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
      // authors: {
      //   $schema: {
      //     type: 'array',
      //     items: {
      //       type: 'object',
      //       required: ['slug', 'name'],
      //       properties: {
      //         slug: { type: 'string', description: 'Author unique slug' },
      //         name: { type: 'string', description: 'Author full name' },
      //         description: { type: 'string', description: 'Author role' },
      //         contact: { type: 'string', description: 'Author email' },
      //         image: { type: 'string', description: 'Author avatar url' },
      //         bio: { type: 'string', description: 'Author bio' },
      //         location: { type: 'string', description: 'Author location' },
      //         company: { type: 'string', description: 'Author company' },
      //         social: {
      //           $schema: {
      //             type: 'array',
      //             items: {
      //               type: 'object',
      //               required: ['text', 'link'],
      //               properties: {
      //                 link: {
      //                   type: 'string',
      //                   description: 'Social network URL',
      //                 },
      //                 name: {
      //                   type: 'string',
      //                   description: 'Name of the social network',
      //                 },
      //                 icon: {
      //                   type: 'string',
      //                   description: 'Icon name of the social network',
      //                 },
      //               },
      //             },
      //           },
      //         },
      //       },
      //     },
      //   },
      // },
    },
  },
})
