import { expect } from '@jest/globals';

import { undefinedIfFalsy } from './undefinedIfFalsy';

describe('undefined if falsy', () => {
  test('passing tests', () => {
    expect(undefinedIfFalsy(null)).toBe(undefined);
    expect(undefinedIfFalsy(undefined)).toBe(undefined);
    expect(undefinedIfFalsy(0)).toBe(undefined);
    expect(undefinedIfFalsy('')).toBe(undefined);
    expect(undefinedIfFalsy(false)).toBe(undefined);
  });

  test('breaking tests', () => {
    expect(undefinedIfFalsy('t')).toBe('t');
    expect(undefinedIfFalsy(true)).toBe(true);
    expect(undefinedIfFalsy(1)).toBe(1);
    expect(undefinedIfFalsy([])).toStrictEqual([]);
    expect(undefinedIfFalsy({})).toStrictEqual({});
  });
});
