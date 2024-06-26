import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';

export const selectToken = createSelector(
  (state: RootState) => state.authentification,
  entity => entity.token as string
);
