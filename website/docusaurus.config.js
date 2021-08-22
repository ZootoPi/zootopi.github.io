/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "ZootoPi",
  tagline: "If you work, it will work!",
  url: "https://zootopi.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icons/icon-72x72.ico",
  organizationName: "ZootoPi", // Usually your GitHub org/user name.
  projectName: "zootopi.github.io", // Usually your repo name.
  themeConfig: {
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
          label: "Tutorials",
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
      copyright: `Copyright © ${new Date().getFullYear()} ZootoPi.`,
    },
    customField: {
      footer_team: "ZootoPi team",
      footer_team_url: "/",
    },
    gtag: {
      trackingID: "G-LFH9JTFMHQ",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
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
      },
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
        ],
      },
    ],
  ],
};
