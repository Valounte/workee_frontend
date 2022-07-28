import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';

export const selectIsAuthentificated = createSelector(
  (state: RootState) => state.user,
  entity => {
    if (entity.token) {
      return true;
    }
    return false;
  }
);
