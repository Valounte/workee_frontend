import { expect } from '@jest/globals';

import { getE2ETestSelector } from './getE2ETestSelector';

describe('Get E2E Test Selector', () => {
  it('with a selector', () => {
    expect(getE2ETestSelector('three-dots-menu')).toBe(
      "[data-test-id='three-dots-menu']"
    );
  });

  it('with an empty selector', () => {
    expect(getE2ETestSelector('')).toBe("[data-test-id='']");
  });
});
