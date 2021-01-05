import { DefaultTheme } from 'vitepress';
import { h } from 'vue';
import { createTree as t, bfs } from '/src/index';

const compo = () => {
  const root = t(1, t(2, t(3), t(6)), t(4, null, t(5)));
  const result = bfs(root);
  return h('ul', result.reduce((prev, next) => {
    prev.push(h('li', next))
    return prev
  }, []));
};

export default {
  Layout: DefaultTheme.Layout,
  NotFound: DefaultTheme.NotFound, // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    app.component('tree-node', compo)
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};
