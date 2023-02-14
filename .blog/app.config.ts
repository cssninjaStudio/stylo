export default defineAppConfig({
  stylo: {
    title: 'Stylô',
    header: {
      logo: {
        src: '/img/logo/logo.svg',
        alt: 'Stylô theme logo',
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
        src: '/img/logo/logo.svg',
        alt: 'Stylô theme logo',
      },
      copyright: {
        enabled: true,
        text: 'cssninja.io',
        href: 'https://cssninja.io',
        target: '_blank',
        rel: '',
      },
      links: [
        {
          href: '/',
          text: 'Home',
          target: '',
          rel: '',
        },
        {
          href: '/privacy',
          text: 'Privacy',
          target: '',
          rel: '',
        },
        {
          href: '/rss.xml',
          text: 'RSS Feed',
          target: '_blank',
          rel: '',
        }
      ],
      social: [
        {
          title: 'Follow us on Twitter',
          icon: 'brandico:twitter',
          href: 'https://twitter.com/cssninjaStudio',
          target: '',
          rel: '',
        },
        {
          title: 'Star us on GitHub',
          icon: 'brandico:github',
          href: 'https://github.com/cssninjaStudio',
          target: '',
          rel: '',
        },
      ],
    },
  },
})
