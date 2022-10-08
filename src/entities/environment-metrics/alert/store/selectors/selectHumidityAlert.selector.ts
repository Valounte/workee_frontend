import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';

export const selectHumidityAlert = createSelector(
  (state: RootState) => state.humidity,
  entity => entity
);
