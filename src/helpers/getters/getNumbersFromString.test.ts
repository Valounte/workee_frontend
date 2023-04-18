import { expect } from '@jest/globals';

import { getNumbersFromString } from './getNumbersFromString';

describe('get numbers from string', () => {
  test('Passing tests', () => {
    expect(getNumbersFromString('dsqdsqDSQ8888')).toBe(8888);
    expect(getNumbersFromString('0')).toBe(0);
    expect(getNumbersFromString('ddd9ddsa0')).toBe(90);
    expect(getNumbersFromString('12345')).toBe(12345);
    expect(getNumbersFromString('1,234,43')).toBe(123443);
    expect(getNumbersFromString('dsqdsqDSQ8888')).toBe(8888);
  });

  test('Breaking tests', () => {
    expect(getNumbersFromString('dsqdsqdsqdsq')).toBe(undefined);
  });
});
