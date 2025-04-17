// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/payments/plugins/shopify', to: '/checkouts/shopify/' },
          { from: '/payments/plugins/woocommerce', to: '/checkouts/woocommerce/' },
        ],
      },
    ],
  ],

  title: 'DePay Documentation',
  tagline: 'Learn how to integrate Web3 Crypto Payments by example.',
  url: 'https://depay.com',
  baseUrl: '/docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'depayfi', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DePay Documentation',
        logo: {
          alt: 'DePay Documentation',
          src: 'img/logo.svg',
          srcDark: 'img/logo.dark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'payments/index',
            position: 'left',
            label: 'Payments',
          },
          {
            type: 'doc',
            docId: 'checkouts/index',
            position: 'left',
            label: 'Checkouts',
          },
          {
            type: 'doc',
            docId: 'apis/index',
            position: 'left',
            label: 'APIs',
          },
          {
            type: 'doc',
            docId: 'wallets/index',
            position: 'left',
            label: 'Wallets',
          },
          {
            type: 'doc',
            docId: 'apps/index',
            position: 'left',
            label: 'Apps',
          },
        ],
      },
      footer: {}, // edit src/theme/Footer/index.js instead
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby', 'php', 'python', 'java']
      },
      image: 'https://depay.com/docs/img/seo/documentation.jpg'
    }),
};

module.exports = config;
