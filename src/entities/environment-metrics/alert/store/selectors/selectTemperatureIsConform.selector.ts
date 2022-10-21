import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';

export const selectTemperatureIsConform = createSelector(
  (state: RootState) => state.currentTemperature,
  entity => {
    if (entity.alert.alertLevel === 'CONFORM_VALUE') {
      return true;
    }
    return false;
  }
);
