import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';

export const selectLuminosityIsConform = createSelector(
  (state: RootState) => state.currentLuminosity,
  entity => {
    if (entity.alert.alertLevel === 'CONFORM_VALUE') {
      return true;
    }
    return false;
  }
);
