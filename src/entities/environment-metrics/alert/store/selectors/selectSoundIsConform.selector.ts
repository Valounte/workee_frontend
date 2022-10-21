import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';

export const selectSoundIsConform = createSelector(
  (state: RootState) => state.currentSound,
  entity => {
    if (entity.alert.alertLevel === 'CONFORM_VALUE') {
      return true;
    }
    return false;
  }
);
