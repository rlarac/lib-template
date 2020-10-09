module.exports = {
  title: 'Documentation',
  description: 'lib documentation',
  // base 在生成docs时根据gh-pages的目录改变
  base: process.env.NODEP_ENV === 'production' ? '/YourPackageName/' : '/',
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
  },
};
