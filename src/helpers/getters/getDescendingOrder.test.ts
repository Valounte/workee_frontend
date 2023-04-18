import { expect } from '@jest/globals';

import { getDescendingOrder } from './getDescendingOrder';

describe('Get Descending Order', () => {
  test('passing tests', () => {
    expect(getDescendingOrder([5, 6, 7, 8])).toStrictEqual([8, 7, 6, 5]);
    expect(getDescendingOrder([8, 7, 6, 5])).toStrictEqual([8, 7, 6, 5]);
    expect(
      getDescendingOrder([0.00000000000001, 0.00002, 9999999999999, 5])
    ).toStrictEqual([9999999999999, 5, 0.00002, 0.00000000000001]);
    expect(getDescendingOrder([0.00000000000001])).toStrictEqual([0.00000000000001]);
    expect(getDescendingOrder([-1, 0.00000000000001, 0])).toStrictEqual([
      0.00000000000001, 0, -1,
    ]);
  });
});
