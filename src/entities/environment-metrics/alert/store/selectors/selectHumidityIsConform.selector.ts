import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';

export const selectHumidityIsConform = createSelector(
  (state: RootState) => state.currentHumidity,
  entity => {
    if (entity.alert.alertLevel === 'CONFORM_VALUE') {
      return true;
    }
    return false;
  }
);
