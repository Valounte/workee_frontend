import type { EntityId } from '@reduxjs/toolkit';

export const isAnArrayOfEntityIdsInNumber = (
  entityIds: EntityId[]
): entityIds is number[] =>
  entityIds.every(entityId => typeof entityId === 'number');
