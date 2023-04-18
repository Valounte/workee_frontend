import { expect } from '@jest/globals';

import { getAutocompleteValue } from './getAutocompleteValue';

const data = {
  id: 999,
  value: 'France',
};

describe('Get Autocomplete Value', () => {
  test('passing tests', () => {
    expect(
      getAutocompleteValue(data, autocompleteValue => autocompleteValue.value)
    ).toStrictEqual({
      label: 'France',
      value: data,
    });
  });
});
