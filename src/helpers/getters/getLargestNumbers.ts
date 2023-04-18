/**
 * Retourne le nombre le plus grand
 * dans un tableau de nombres
 * @param numbers
 */
import { getDescendingOrder } from './getDescendingOrder';

export function getLargestNumber(numbers: Array<number>) {
  return getDescendingOrder(numbers)[0];
}
