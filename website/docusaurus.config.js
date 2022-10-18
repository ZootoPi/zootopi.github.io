// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ZootoPi",
  tagline: "If you work, it will work!",
  url: "https://zootopi.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icons/icon-72x72.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zootopi", // Usually your GitHub org/user name.
  projectName: "zootopi", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ZootoPi",
        logo: {
          alt: "ZootoPi Logo",
          src: "img/icons/icon-96x96.png",
        },
        items: [
          {
            type: "doc",
            docId: "python/anaconda",
            position: "left",
            label: "Tutorial",
          },
          {
            to: "project/",
            activeBasePath: "project",
            position: "left",
            label: "Projects",
          },
          {
            to: "certificate/",
            activeBasePath: "certificate",
            position: "left",
            label: "Certificates",
          },
          {
            to: "about",
            position: "right",
            label: "About",
          },
          {
            to: "blog",
            position: "right",
            label: "Blog",
          },
          {
            href: "https://github.com/zootopi",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ZootoPi.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "../docs/tutorial",
          routeBasePath: "tutorial",
          sidebarPath: require.resolve("./sidebars/tutorial.js"),
        },
        blog: {
          path: "../blog",
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-LFH9JTFMHQ",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "project",
        path: "../docs/project",
        routeBasePath: "project",
        sidebarPath: require.resolve("./sidebars/project.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "certificate",
        path: "../docs/certificate",
        routeBasePath: "certificate",
        sidebarPath: require.resolve("./sidebars/certificate.js"),
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.svg",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(0, 194, 203)",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "img/icons/icon-192x192.png",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
