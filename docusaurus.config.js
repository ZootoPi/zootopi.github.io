/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "GafBof Team",
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
      title: "GafBof Team",
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
      logo: {
        alt: "GafBof Team",
        src: "img/logo.png",
        href: "https://gafbof.dev",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:contact@gafbof.dev",
            },
            {
              label: "GitHub",
              href: "https://github.com/gafbof",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GafBof Team.`,
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
