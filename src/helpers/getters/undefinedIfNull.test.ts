import { expect } from '@jest/globals';

import { undefinedIfNull } from './undefinedIfNull';

test('undefined if null', () => {
  expect(undefinedIfNull(null)).toBe(undefined);
  expect(undefinedIfNull(undefined)).toBe(undefined);
  expect(undefinedIfNull(0)).toBe(0);
  expect(undefinedIfNull('')).toBe('');
  expect(undefinedIfNull(false)).toBe(false);
  expect(undefinedIfNull([])).toStrictEqual([]);
  expect(undefinedIfNull({})).toStrictEqual({});
  expect(undefinedIfNull(true)).toBe(true);
});
