/* eslint-disable */
import type { EntityId } from '@reduxjs/toolkit';

export const isSameEntity = <Entity>(
  previousEntity: Entity,
  nextEntity: Entity,
  selectEntityId: (entity: Entity) => EntityId
) => selectEntityId(previousEntity) === selectEntityId(nextEntity);
