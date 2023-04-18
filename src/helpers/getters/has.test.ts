import { expect } from '@jest/globals';

import { has } from './has';

describe('has', () => {
  test('Passing tests', () => {
    expect(has(undefined)).toBe(false);
    expect(has(null)).toBe(false);
    expect(has('')).toBe(false);
    expect(has(0)).toBe(false);
    expect(has('0')).toBe(true);
    expect(has([])).toBe(true);
    expect(has({})).toBe(true);
  });
});
