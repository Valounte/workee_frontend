import { expect } from '@jest/globals';

import { hasItem } from './hasItem';

describe('Has item', () => {
  test('Passing Test', () => {
    expect(hasItem([1])).toBe(true);
    expect(hasItem([0])).toBe(true);
    expect(hasItem([''])).toBe(true);
    expect(hasItem([{}])).toBe(true);
    expect(hasItem(['0', '1'])).toBe(true);
  });
  test('Fail Test', () => {
    expect(hasItem([])).toBe(false);
  });
});
