const { build } = require('vite/dist/node/build');
const config = require('../vite.config.js');

(async function () {
  try {
    await build(config);
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
})();
