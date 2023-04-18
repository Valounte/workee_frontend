/* eslint-disable */
export const getAutocompleteValue = <Value>(
  value: Value,
  getLabel: (value: Value) => string
) => ({
  label: getLabel(value),
  value,
});
