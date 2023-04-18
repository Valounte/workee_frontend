import { expect } from '@jest/globals';

import { isAnArrayWithoutUndefinedValues } from './isAnArrayWithoutUndefinedValues';

describe('Is An Array Without Undefined Values', () => {
  test('passing tests', () => {
    expect(isAnArrayWithoutUndefinedValues([1, 2, 3, 4, 5, 6])).toBe(true);
    expect(isAnArrayWithoutUndefinedValues([1, null, 3, 4, 5, 6])).toBe(true);
    expect(isAnArrayWithoutUndefinedValues([0, null, 3, 4, 5, 6])).toBe(true);
    expect(isAnArrayWithoutUndefinedValues([null, null, null])).toBe(true);
  });
  test('breaking tests', () => {
    expect(
      isAnArrayWithoutUndefinedValues([1, 2, 3, 4, 5, '6', null, [], undefined])
    ).toBe(false);
  });
});
