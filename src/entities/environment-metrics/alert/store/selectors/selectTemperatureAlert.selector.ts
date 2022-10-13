import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';

export const selectTemperatureAlert = createSelector(
  (state: RootState) => state.temperature,
  entity => entity.alert
);
