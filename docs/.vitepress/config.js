const viteConfig = require('../../vite.config');

module.exports = {
  title: 'Lib',
  description: 'lib documentation',
  alias: viteConfig.alias.reduce((prev, next) => {
    prev[next.find] = next.replacement;
    return prev;
  }, {}),
  // base 在生成docs时根据gh-pages的目录改变
  base: process.env.NODEP_ENV === 'production' ? '/lib-template/' : '/',
  head: [
    [
      'meta',
      {
        'http-equiv': 'Content-Type',
        content: 'text/html;charset=utf-8',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=no, viewport-fit=cover',
      },
    ],
    [
      'meta',
      {
        name: 'referrer',
        content: 'no-referrer',
      },
    ],
  ],
  themeConfig: {
    // some options
    repo: 'zzh97228/lib-template',
    nav: [{ text: 'Guide', link: '/guide/functions' }],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          children: [
            {
              text: 'Functions',
              link: '/guide/functions'
            }
          ]
        }
      ]
    }
  },
};
