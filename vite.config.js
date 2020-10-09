const { resolve } = require('path');

module.exports = {
  alias: {
    '/src/': resolve(__dirname, './src'),
  },
  root: resolve(__dirname, './playground'),
  port: 8080
};
