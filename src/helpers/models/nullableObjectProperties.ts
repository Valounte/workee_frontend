/**
 * Take an object model and return the same schema but all value are nullables
 */
export type NullableObjectProperties<
  T extends Record<string | number | symbol, any>,
  Key extends keyof T = keyof T
> = Record<Key, T[Key] | null>;
