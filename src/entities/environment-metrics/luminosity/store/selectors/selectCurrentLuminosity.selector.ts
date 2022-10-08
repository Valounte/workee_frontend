import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';

export const selectCurrentLuminosity = createSelector(
  (state: RootState) => state.luminosity,
  entity => entity
);
