import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../../store/store';

export const selectCurrentSound = createSelector(
  (state: RootState) => state.currentSound,
  entity => entity
);
