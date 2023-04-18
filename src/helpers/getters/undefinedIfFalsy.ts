import { has } from './has';

type Falsy = null | undefined | false;

/**
 * check if item exist, if it is false or if it is an empty string or zero, return it / return undefined
 * @param item
 */
export const undefinedIfFalsy = <T>(item: T | Falsy) =>
  has(item) ? item : undefined;
