import { add } from '../src';

describe('index.ts', () => {
  it('should add two number', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
