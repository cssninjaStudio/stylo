export default defineAppConfig({
  stylo: {
    title: 'Bakery',
    header: {
      displayTitle: false,
      logo: {
        src: '/img/logo/logo.svg',
        srcDark: '/img/logo/logo-dark.svg',
        alt: 'Your lovely Balery',
      },
    },
    footer: {
      action: {
        enabled: false,
        title: '',
        text: '',
        link: {
          href: '',
          text: '',
          target: '',
          rel: '',
        },
      },
      logo: {
        src: '/img/logo/logo.svg',
        srcDark: '/img/logo/logo-dark.svg',
        alt: 'Your lovely Balery',
      },
      copyright: {
        enabled: false,
        text: '',
        href: '',
        rel: '',
        target: '',
      },
      social: [
        {
          href: '/',
          icon: 'fa6-brands:facebook-f',
        },
        {
          href: '/',
          icon: 'fa6-brands:twitter',
        },
        {
          href: '/',
          icon: 'fa6-brands:linkedin-in',
        }
      ],
      links: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Recipes',
          href: '/blog',
        },
        {
          text: 'Chefs',
          href: '/authors',
        },
        {
          text: 'Privacy',
          href: '/privacy',
        }
      ],
    },
  }
})