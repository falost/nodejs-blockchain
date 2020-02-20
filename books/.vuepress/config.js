const path = require('path')
module.exports = {
  title: 'Node.js区块链开发2',
  description: '《Node.js区块链开发2》',
  base: '/nodejs-blockchain/',
  dest: './docs/',
  themeConfig: {
    sidebar: {
      '/chapter/00/': [
        {
          title: '序章 写在前面',
          collapsable: false,
          children: [
            {
              title: '第1节 前言',
              path: '01-前言'
            },
            {
              title: '第2节 如何用区块链重塑产业生产形态',
              path: '02-如何用区块链重塑产业生产形态'
            }
          ]
        },
        {
          title: '第1章 DDN区块链基础',
          path: '/chapter/01/01-运行起来'
        }
      ],
      '/chapter/01/': [
        {
          title: '序章 写在前面',
          path: '/chapter/00/01-前言'
        },
        {
          title: '第1章 DDN区块链基础',
          collapsable: false,
          children: [
            {
              title: '第1节 运行起来',
              path: '01-运行起来'
            },
            {
              title: '第2节 DDN区块链加密库的选择',
              path: '02-DDN区块链加密库的选择'
            },
            {
              title: '第3节 DDN区块链模块规范解读',
              path: '03-DDN区块链模块规范解读'
            }
          ]
        },
        {
          title: '第2章 开发实践',
          path: '/chapter/02/01-planning'
        },
      ],
      '/chapter/02/': [
        {
          title: '第1章 DDN区块链基础',
          path: '/chapter/01/01-运行起来'
        },
        {
          title: '第2章 开发实践',
          collapsable: false,
          children: [
            {
              title: '第1节 planning',
              path: '01-planning'
            },
            {
              title: '第2节 Eslink的使用',
              path: '02-Eslink的使用'
            },
            {
              title: '第3节 rollup和webpack的使用',
              path: '03-rollup和webpack的使用'
            },
            {
              title: '第4节 buffer解读',
              path: '04-buffer解读'
            }
          ]
        }
      ]
    },
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '目录', link: '/chapter/' }
    ],
    displayAllHeaders: false,
    activeHeaderLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'falost/nodejs-blockchain/',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'falost/nodejs-blockchain/',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'book',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    lastUpdated: 'Last Updated',
    // smoothScroll: true
  },
  plugins: [
    '@vuepress/active-header-links',
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    '@vuepress/back-to-top'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        'assets': 'books/assets/'
      }
    }
  },
}