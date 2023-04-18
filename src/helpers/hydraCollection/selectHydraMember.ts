import type { HydraCollection } from './models';

export const selectHydraMember = <Data extends HydraCollection<any>>(
  data?: Data
): Data['hydra:member'] => (data ? data['hydra:member'] : []);
