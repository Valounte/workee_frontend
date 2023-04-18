export const isString = (item: string | unknown): item is string =>
  typeof item === 'string';
