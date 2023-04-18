import { expect } from '@jest/globals';

import { getFormattedName } from './getFormattedName';

describe('Get Formatted Name', () => {
  it('Tests with uppercases and lowercases', () => {
    expect(getFormattedName('Parc Borely')).toBe('Parc Borely');
    expect(getFormattedName('parc borely')).toBe('Parc borely');
    expect(getFormattedName('Parc BORELY')).toBe('Parc BORELY');
  });

  it('Tests with symbols', () => {
    expect(getFormattedName('parc*borely*')).toBe('Parc*borely*');
    expect(getFormattedName('parc-borely')).toBe('Parc-borely');
  });

  it('Tests with numbers', () => {
    expect(getFormattedName('parc b0rely')).toBe('Parc b0rely');
    expect(getFormattedName('Parc b0rely 1')).toBe('Parc b0rely 1');
  });

  it('Tests with underscores', () => {
    expect(getFormattedName('parc_borely')).toBe('Parc borely');
    expect(getFormattedName('parc_borely_')).toBe('Parc borely ');
    expect(getFormattedName('_parc_borely')).toBe(' parc borely');
  });

  it('Tests with no string to format', () => {
    expect(getFormattedName()).toBe('');
  });
});
