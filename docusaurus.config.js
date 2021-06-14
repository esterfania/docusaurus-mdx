/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Docs - Tutorial to MDX",
  tagline: "A tutorial to MDX",
  url: "https://esterfania.github.io/docusaurus-mdx",
  baseUrl: "/docusaurus-mdx/",
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",
  onDuplicateRoutes: "error",
  favicon: "img/favicon.ico",
  organizationName: "esterfania", // Usually your GitHub org/user name.
  projectName: "docusaurus-mdx", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  themes: [],
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Docs",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/esterfania/docusaurus-mdx",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          // Please change this to your repo.
          editUrl: "https://github.com/esterfania/docusaurus-mdx/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/esterfania/docusaurus-mdx/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
