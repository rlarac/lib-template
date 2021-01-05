const { resolve } = require('path');

module.exports = {
  alias: [
    {
      find: '/src',
      replacement: resolve(__dirname, 'src'),
    },
  ],
  root: resolve(__dirname, 'playground'),
  server: {
    port: 8080,
  },
};
