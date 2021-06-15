/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "GafBof",
  tagline: "If you work, it will work!",
  url: "https://gafbof.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo_square.svg",
  organizationName: "GafBof", // Usually your GitHub org/user name.
  projectName: "gafbof.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "GafBof",
      logo: {
        alt: "GafBof Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "tutorial-intro",
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
          to: "blog",
          position: "right",
          label: "Blog",
        },
        {
          href: "https://github.com/gafbof",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} GafBof.`,
    },
    customField: {
      footer_team: "GafBof team",
      footer_team_url: "https://gafbof.dev",
    },
    googleAnalytics: {
      trackingID: "G-XFEDRE3531",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs/tutorial",
          routeBasePath: "tutorial",
          sidebarPath: require.resolve("./sidebars/tutorial.js"),
        },
        blog: {
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
        path: "docs/project",
        routeBasePath: "project",
        sidebarPath: require.resolve("./sidebars/project.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "certificate",
        path: "docs/certificate",
        routeBasePath: "certificate",
        sidebarPath: require.resolve("./sidebars/certificate.js"),
      },
    ],
  ],
};
