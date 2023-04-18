import { expect } from '@jest/globals';

import { getTotalPages } from './getTotalPages';

describe('Get Total Pages', () => {
  it('Tests with standard values', () => {
    expect(getTotalPages(100, 10)).toBe(10);
    expect(getTotalPages(10, 10)).toBe(1);
    expect(getTotalPages(10, 1)).toBe(10);
  });

  it('Tests with small and big values', () => {
    expect(getTotalPages(0, 10)).toBe(0);
    expect(getTotalPages(1000, 10)).toBe(100);
    expect(getTotalPages(100000, 50)).toBe(2000);
  });
});
