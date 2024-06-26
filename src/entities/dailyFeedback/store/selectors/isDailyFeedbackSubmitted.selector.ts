import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';

export const selectIsDailyFeedbackSubmitted = createSelector(
  (state: RootState) => state.dailyFeedback,
  entity => entity.isDailyFeedbackSubmitted
);
