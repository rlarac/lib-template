const shell = require('shelljs');
const { resolve } = require('path');
const { build } = require('vitepress/dist/node/build/build');
const docs = resolve(__dirname, '../docs');

(async function () {
  try {
    await build({
      root: docs,
    });
    shell.mv(resolve(docs, './.vitepress/dist'), resolve(docs, './dist'));
    shell.cp(resolve(docs, './.nojekyll'), resolve(docs, './dist/.nojekyll'));
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
})();
