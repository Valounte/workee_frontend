/**
 * enables to infer the type according to whether the item exists or not, if it is false or if it is an empty string or zero
 * @param item
 */
export const has = <T>(item: T | null | undefined | boolean): item is T => !!item;
