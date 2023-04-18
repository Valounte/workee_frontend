import type { UnionTypeFromArray } from './unionTypeFromArray';

export const entityAdapterFunctions = [
  'addOne',
  'addMany',
  'setAll',
  'removeOne',
  'removeMany',
  'removeAll',
  'updateOne',
  'updateMany',
  'upsertOne',
  'upsertMany',
] as const;

export type EntityAdapterFunctions = UnionTypeFromArray<
  typeof entityAdapterFunctions
>;
