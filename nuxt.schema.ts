export default defineNuxtSchema({
  appConfig: {
    stylo: {
      $schema: {
        title: 'Stylô',
        description: 'Stylô theme configuration.',
        tags: [
          '@studioIcon material-symbols:docs'
        ],
      },
      title: {
        $default: 'Stylô',
        $schema: {
          type: "string",
          title: 'Title',
          description: 'Website title, used as header default title and meta title.',
          tags: [
            '@studioIcon material-symbols:title',
            '@studioInput string',
          ],
        },
      },
      header: {
        $schema: {
          title: 'Header',
          description: 'Header configuration.',
          tags: [
            '@studioIcon fluent:document-header-24-regular',
          ],
        },
        displayTitle: {
          $default: true,
          $schema: {
            type: "boolean",
            title: 'Display title',
            description: 'Show or hide the title in the header.',
            tags: [
              '@studioInput boolean',
            ],
          },
        },
        logo: {
          $schema: {
            title: 'Logo',
            description: 'Header logo configuration.',
            tags: [
              '@studioIcon material-symbols:image',
            ],
          },
          src: {
            $default: '',
            $schema: {
              type: 'string',
              title: 'Logo (light)',
              description: 'Header logo image for light mode.',
              tags: [
                '@studioIcon material-symbols:image',
                '@studioInput media',
              ],
            }
          },
          srcDark: {
            $default: '',
            $schema: {
              type: 'string',
              title: 'Logo (dark)',
              description: 'Header logo image for dark mode.',
              tags: [
                '@studioIcon material-symbols:image-outline',
                '@studioInput media',
              ],
            }
          },
          alt: {
            $default: '',
            $schema: {
              type: 'string',
              title: 'Logo alt',
              description: 'Header logo alternative text.',
              tags: [
                '@studioInput string',
              ],
            }
          },
        },
      },
      footer: {
        $schema: {
          title: 'Footer',
          description: 'Footer configuration.',
          tags: [
            '@studioIcon fluent:document-footer-24-regular',
          ],
        },
        action: {
          $schema: {
            title: 'Action',
            description: 'Footer call-to-action configuration.',
            tags: [
              '@studioIcon fluent:button-20-regular',
            ],
          },
          enabled: false,
          title: '',
          text: '',
          link: {
            href: '#',
            text: 'Subscribe',
            target: '',
            rel: '',
          },
        },
        logo: {
          $schema: {
            title: 'Logo',
            description: 'Footer logo configuration.',
            tags: [
              '@studioIcon material-symbols:image',
            ],
          },
          src: {
            $default: '',
            $schema: {
              type: 'string',
              title: 'Logo (light)',
              description: 'Footer logo image for light mode.',
              tags: [
                '@studioIcon material-symbols:image',
                '@studioInput media',
              ],
            }
          },
          srcDark: {
            $default: '',
            $schema: {
              type: 'string',
              title: 'Logo (dark)',
              description: 'Footer logo image for dark mode.',
              tags: [
                '@studioIcon material-symbols:image-outline',
                '@studioInput media',
              ],
            }
          },
          alt: {
            $default: '',
            $schema: {
              type: 'string',
              title: 'Logo alt',
              description: 'Footer logo alternative text.',
              tags: [
                '@studioInput string',
              ],
            }
          },
        },
        copyright: {
          $schema: {
            title: 'Copyrigth',
            description: 'Footer copyrigth configuration.',
            tags: [
              '@studioIcon material-symbols:copyright',
            ],
          },
          enabled: false,
          text: '',
          href: '',
          rel: '',
          target: '',
        },
        social: {
          $schema: {
            type: 'array',
            title: 'Social networks',
            description: 'Footer social links configuration.',
            tags: [
              '@studioIcon material-symbols:share',
            ],
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
            title: 'Links',
            description: 'Footer links configuration.',
            tags: [
              '@studioIcon material-symbols:link',
            ],
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
