// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HackerRank Docs',
  tagline: 'Documentation, guides, and resources for HackerRank products.',
  favicon: 'img/favicon.ico',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,800,900&display=swap',
      },
    },
  ],

  markdown: {
    format: 'detect', // .md → CommonMark, .mdx → MDX — avoids JSX errors in article content
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'content',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        docsDir: 'content',
        docsRouteBasePath: '/',
        indexBlog: false,
        searchBarShortcutHint: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'HackerRank',
          src: 'img/logo-light.png',
          href: '/',
        },
        items: [
          {
            label: 'Product guides',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                type: 'html',
                value: '<span class="navbar-dropdown__section-label">Products</span>',
              },
              {
                type: 'html',
                value: '<a href="/hackerrank-screen/managing-tests/creating-a-new-test" class="navbar-dropdown__product"><span class="navbar-dropdown__product-name">Screen</span><span class="navbar-dropdown__product-desc">Save time and accelerate your hiring</span></a>',
              },
              {
                type: 'html',
                value: '<a href="/interviews/getting-started/introduction-to-hackerrank-interviews" class="navbar-dropdown__product"><span class="navbar-dropdown__product-name">Interview</span><span class="navbar-dropdown__product-desc">Conduct stellar technical interviews</span></a>',
              },
              {
                type: 'html',
                value: '<a href="/engage/create-an-event" class="navbar-dropdown__product"><span class="navbar-dropdown__product-name">Engage</span><span class="navbar-dropdown__product-desc">Promote your tech brand</span></a>',
              },
              {
                type: 'html',
                value: '<a href="/skillup/hackerrank-skillup-1/accessing-skillup-employer-platform" class="navbar-dropdown__product"><span class="navbar-dropdown__product-name">SkillUp</span><span class="navbar-dropdown__product-desc">Mobilize your tech talent</span></a>',
              },
              {
                type: 'html',
                value: '<a href="/chakra/getting_started-1/introduction-to-chakra" class="navbar-dropdown__product"><span class="navbar-dropdown__product-name">Chakra</span><span class="navbar-dropdown__product-desc">Pre-screen with AI interviews</span></a>',
              },
            ],
          },
          {
            to: '/library/getting_started/hackerrank-library-navigation',
            label: 'Platform guides',
            position: 'left',
          },
          {
            to: '/integrations-1/getting-started-with-integrations/integrations-overview',
            label: 'Integrations',
            position: 'left',
          },
          {
            to: '/general-help/release-notes/april-2026-release-notes',
            label: 'Release notes',
            position: 'left',
          },
          {
            label: 'More',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                label: 'Additional resources',
                to: '/general-help/academy/hackerrank-academy-video-tutorial',
              },
            ],
          },
          {
            href: 'https://www.hackerrank.com',
            label: 'HackerRank.com ↗',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Information & Security',
            items: [
              { label: 'Security', href: 'https://www.hackerrank.com/security' },
              { label: 'Privacy Policy', href: 'https://www.hackerrank.com/privacy' },
              { label: 'Terms of Service', href: 'https://www.hackerrank.com/terms' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'API', href: 'https://www.hackerrank.com/work/api' },
              { label: 'Roles Directory', href: 'https://www.hackerrank.com/roles' },
              { label: 'Blog', href: 'https://www.hackerrank.com/blog' },
            ],
          },
          {
            title: 'About Us',
            items: [
              { label: 'Customer Stories', href: 'https://www.hackerrank.com/customers' },
              { label: 'Trust', href: 'https://www.hackerrank.com/trust' },
            ],
          },
          {
            title: 'Get Started',
            items: [
              { label: 'Platform', href: 'https://www.hackerrank.com/work' },
              { label: 'Pricing', href: 'https://www.hackerrank.com/work/pricing' },
              { label: 'Free Trial', href: 'https://www.hackerrank.com/work/free-trial' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} HackerRank. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'python', 'javascript'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
};

module.exports = config;
