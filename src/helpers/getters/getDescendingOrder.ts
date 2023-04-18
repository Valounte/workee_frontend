/**
 * order an array of number
 * from the largest to the smallest
 * @param numbers
 */
export function getDescendingOrder(numbers: Array<number>) {
  return [...numbers].sort((a, b) => b - a);
}
