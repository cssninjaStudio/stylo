export default defineNuxtSchema({
  appConfig: {
    /**
     * Folio theme configuration.
     *
     * @studio-icon material-symbols:docs
     */
    folio: {
      categories: {
        $schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['slug', 'name'],
            properties: {
              slug: { type: 'string', description: 'Category unique slug' },
              name: { type: 'string', description: 'Category name' },
              description: {
                type: 'string',
                description: 'Category description',
              },
              image: { type: 'string', description: 'Category avatar url' },
            },
          },
        },
      },
      authors: {
        $schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['slug', 'name'],
            properties: {
              slug: { type: 'string', description: 'Author unique slug' },
              name: { type: 'string', description: 'Author full name' },
              description: { type: 'string', description: 'Author role' },
              contact: { type: 'string', description: 'Author email' },
              image: { type: 'string', description: 'Author avatar url' },
              bio: { type: 'string', description: 'Author bio' },
              location: { type: 'string', description: 'Author location' },
              company: { type: 'string', description: 'Author company' },
              social: {
                $schema: {
                  type: 'array',
                  items: {
                    type: 'object',
                    required: ['text', 'link'],
                    properties: {
                      link: {
                        type: 'string',
                        description: 'Social network URL',
                      },
                      name: {
                        type: 'string',
                        description: 'Name of the social network',
                      },
                      icon: {
                        type: 'string',
                        description: 'Icon name of the social network',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})
