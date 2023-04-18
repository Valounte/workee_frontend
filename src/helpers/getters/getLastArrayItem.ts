/**
 * Return the last item from an array
 * @param array
 */
export const getLastArrayItem = <Item = any>(array: Item[]): Item =>
  array.slice(-1)[0];
