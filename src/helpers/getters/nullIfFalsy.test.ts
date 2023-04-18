import { expect } from '@jest/globals';

import { nullIfFalsy } from './nullIfFalsy';

describe('null if falsy', () => {
  test('passing tests', () => {
    expect(nullIfFalsy(null)).toBe(null);
    expect(nullIfFalsy(undefined)).toBe(null);
    expect(nullIfFalsy(0)).toBe(null);
    expect(nullIfFalsy('')).toBe(null);
    expect(nullIfFalsy(false)).toBe(null);
  });

  test('breaking tests', () => {
    expect(nullIfFalsy('t')).toBe('t');
    expect(nullIfFalsy(true)).toBe(true);
    expect(nullIfFalsy(1)).toBe(1);
    expect(nullIfFalsy([])).toStrictEqual([]);
    expect(nullIfFalsy({})).toStrictEqual({});
  });
});
