import { expect } from '@jest/globals';

import { getLastArrayItem } from './getLastArrayItem';

describe('Get Last Array Item', () => {
  test('Passing test', () => {
    expect(getLastArrayItem([1, 2, 3, 0])).toBe(0);
    expect(getLastArrayItem([1, 2, 3, 0, 'toto'])).toBe('toto');
  });
});
