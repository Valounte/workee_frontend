import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';

export const selectIsConform = createSelector(
  (state: RootState) => state.temperature,
  entity => {
    if (entity.alert?.alertLevel === "CONFORM_VALUE") {
      return true;
    }
    return false;
  }
);
