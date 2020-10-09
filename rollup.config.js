const ts = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { uglify } = require('rollup-plugin-uglify');
const commonjs = require('@rollup/plugin-commonjs');
const path = require('path');
const pkg = require('./package.json');

const banner = `
/**
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} Zhang Ziheng
 * Released under the ${pkg.license} License
 */
`;

function genOutput(format = 'umd') {
  const plugins = [];
  if (format !== 'es') {
    plugins.push(uglify());
  }
  return {
    banner,
    format,
    name: pkg.name,
    dir: 'dist',
    entryFileNames: pkg.name + '.' + format + '.min.js',
    globals: {
      // global variables
    },
    plugins,
  };
}

module.exports = {
  input: path.resolve(__dirname, './src/index.ts'),
  output: [genOutput(), genOutput('es'), genOutput('cjs')],
  external: [
    // external packages
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    ts({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
      tsconfigOverride: {
        compilerOptions: { declaration: true, rootDir: './src' },
      },
    }),
  ],
};
