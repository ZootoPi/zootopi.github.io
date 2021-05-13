/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "GafBof",
  tagline: "If you work, it will work!",
  url: "https://gafbof.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "GafBof", // Usually your GitHub org/user name.
  projectName: "gafbof.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "GafBof",
      logo: {
        alt: "GafBof Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorials",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Projects",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Certificates",
        },
        {
          type: "doc",
          docId: "intro",
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
