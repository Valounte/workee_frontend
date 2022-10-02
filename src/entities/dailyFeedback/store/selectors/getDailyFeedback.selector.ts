import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';

export const selectDailyFeedback = createSelector(
  (state: RootState) => state.dailyFeedback,
  entity => entity
);
