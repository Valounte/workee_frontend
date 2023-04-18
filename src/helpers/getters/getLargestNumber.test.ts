import { expect } from '@jest/globals';

import { getLargestNumber } from './getLargestNumbers';

describe('Get Largest Number', () => {
  test('passing tests', () => {
    expect(getLargestNumber([1, 10, 100, 1000, 10000, 100000, 9, 0])).toBe(100000);
    expect(getLargestNumber([0.1, 0.2, 0.001, 1.0, 0])).toBe(1.0);
    expect(
      getLargestNumber([
        0.000000000000000000000000000000000000000000000000000000000000000001,
        0.000000000000000002, 0.0000000000000000000000000000001, 0,
      ])
    ).toBe(0.000000000000000002);
  });
});
