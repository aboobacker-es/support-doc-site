// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HackerRank Help Center',
  tagline: 'Documentation, guides, and resources for HackerRank products.',
  favicon: 'img/favicon.ico',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          alt: 'HackerRank Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-white.svg',
        },
        style: 'dark',
        items: [
          {
            to: '/hackerrank-screen/managing-tests/creating-a-new-test',
            label: 'Screen',
            position: 'left',
          },
          {
            to: '/interviews',
            label: 'Interviews',
            position: 'left',
          },
          {
            to: '/integrations-1',
            label: 'Integrations',
            position: 'left',
          },
          {
            href: 'https://www.hackerrank.com',
            label: 'HackerRank.com ↗',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              { label: 'Screen', to: '/hackerrank-screen' },
              { label: 'Interviews', to: '/interviews' },
              { label: 'Library', to: '/library' },
              { label: 'SkillUp', to: '/skillup' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Integrations', to: '/integrations-1' },
              { label: 'Account Settings', to: '/account-settings' },
              { label: 'General Help', to: '/general-help' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'HackerRank.com', href: 'https://www.hackerrank.com' },
              { label: 'Blog', href: 'https://www.hackerrank.com/blog' },
              { label: 'Contact Support', href: 'https://support.hackerrank.com' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HackerRank. All rights reserved.`,
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
