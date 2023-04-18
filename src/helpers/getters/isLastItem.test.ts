import { expect } from '@jest/globals';

import { isLastItem } from './isLastItem';

describe('Is last item', () => {
  it('Tests with number array', () => {
    expect(isLastItem([1], 0)).toBe(true);
    expect(isLastItem([0, 1, 2], 1)).toBe(false);
  });

  it('Tests with string values in array', () => {
    expect(isLastItem(['hello', 'world'], 1)).toBe(true);
  });

  it('Tests with negative index', () => {
    expect(isLastItem([1, 2, 3], -1)).toBe(false);
  });
});
