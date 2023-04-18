/**
 * check if item is null, if return undefined, if not return value
 * @param item
 */
export const undefinedIfNull = <T>(item: T | null) =>
  item !== null ? item : undefined;
