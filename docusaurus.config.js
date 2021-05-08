/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "GafBof team",
  tagline: "sharing and make fun",
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
          label: "Tutorial",
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
      organization: "GafBof",
      url: "https://gafbof.dev",
      copyright: `Copyright © ${new Date().getFullYear()} GafBof.`,
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
