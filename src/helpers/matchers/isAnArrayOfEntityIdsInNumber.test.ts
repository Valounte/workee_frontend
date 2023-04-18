import { expect } from '@jest/globals';

import { isAnArrayOfEntityIdsInNumber } from './isAnArrayOfEntityIdsInNumber';

describe('Is An Array Of Entity Ids In Number', () => {
  test('passing tests', () => {
    expect(isAnArrayOfEntityIdsInNumber([1, 2, 3, 4, 5, 6])).toBe(true);
    expect(isAnArrayOfEntityIdsInNumber([0, 2, 3, 0, 5, 6])).toBe(true);
  });
  test('breaking tests', () => {
    expect(isAnArrayOfEntityIdsInNumber([1, 2, 3, 4, 5, '6'])).toBe(false);
  });
});
