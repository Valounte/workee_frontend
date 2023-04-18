export const getTotalPages = (totalItems: number, limit: number) =>
  Math.ceil(totalItems / limit);
