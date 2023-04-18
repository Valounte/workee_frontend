import { expect } from '@jest/globals';

import { isString } from './isString';

describe('Is String', () => {
  test('passing tests', () => {
    expect(isString('1')).toBe(true);
    expect(isString('null')).toBe(true);
    expect(isString('[]')).toBe(true);
    expect(isString('{}')).toBe(true);
  });
  test('breaking tests', () => {
    expect(isString(1)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });
});
