import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../../store/store';

export const selectCurrentTemperature = createSelector(
  (state: RootState) => state.currentTemperature, 
  entity => entity
);
