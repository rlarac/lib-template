# Functions

This is a page for introducing functions.

## Usage
<tree-node></tree-node>

## Code
```js
const compo = () => {
  const root = t(1, t(2, t(3), t(6)), t(4, null, t(5)));
  const result = bfs(root);
  return h('ul', result.reduce((prev, next) => {
    prev.push(h('li', next))
    return prev
  }, []));
};
```