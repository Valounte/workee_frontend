import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/store/store';

export const selectToken = createSelector(
  (state: RootState) => state.user,
  entity => entity.token
);
