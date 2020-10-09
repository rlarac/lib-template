import { createApp, h } from 'vue';
import { add } from '/src/index';

createApp({
  render: () =>
    h('main', { id: 'playground', class: 'playground' }, '' + add(1, 2)),
}).mount('#app');
