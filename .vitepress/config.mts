import { defineConfig } from 'vitepress'

import { generateSidebar } from "vitepress-sidebar";  // 引入vitepress-sidebar自动生成侧边栏插件

const vitepressSidebarOptions = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'notes',
    basePath: '/notes/',
    resolvePath: '/notes/',
    useTitleFromFileHeading: true,
    collapsed: false, //折叠组关闭
    collapseDepth: 3, //折叠组2级菜单
    removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
    prefixSeparator: "_", //删除前缀的符号
  },
  {
    documentRootPath: 'docs',
    basePath: '/services/',
    scanStartPath: 'services',
    resolvePath: '/services/',
    useTitleFromFrontmatter: true,
    collapsed: false, //折叠组关闭
    collapseDepth: 2, //折叠组2级菜单
    removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
    prefixSeparator: "_", //删除前缀的符号
  }

];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: "docs", // 指定文档的根目录
  base: '/vitepress-note/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/notes/' },
      { text: 'Services', link: '/services/' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: generateSidebar(vitepressSidebarOptions),  // 自动生成侧边栏

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: `Released under the MIT License.`,
      // message: `<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备XXXXXXXX号</a>`,
      copyright: `Copyright © ${new Date().getFullYear()} AKAMS.CN`,
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short", // full
        timeStyle: "short", // medium
      },
    },
  }
})
