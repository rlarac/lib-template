import { createTree as t, bfs } from '../src';

describe('index.ts', () => {
  it('should print tree data', () => {
    const root = t(1, t(2, t(3), t(6)), t(4, null, t(5)));
    expect(bfs(root)).toEqual([1, 2, 4, 3, 6, 5]);
  });
});
