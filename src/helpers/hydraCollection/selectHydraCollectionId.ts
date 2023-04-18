import type { HydraMember } from './models';

export const selectHydraCollectionId = <T>(entity: HydraMember<T>) => entity['@id'];
