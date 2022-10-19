import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../../store/store';

export const selectCurrentHumidity = createSelector(
  (state: RootState) => state.currentHumidity,
  entity => entity
);
