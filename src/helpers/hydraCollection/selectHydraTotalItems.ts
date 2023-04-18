import type { HydraCollection } from './models';

export const selectHydraTotalItems = <
  Entity,
  Data extends HydraCollection<Entity> = HydraCollection<any>
>(
  data: Data | void
) => (data ? data['hydra:totalItems'] : 0);
