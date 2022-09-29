import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';

export const selectMe = createSelector(
  (state: RootState) => state.authentification,
  entity => entity.user,
);
