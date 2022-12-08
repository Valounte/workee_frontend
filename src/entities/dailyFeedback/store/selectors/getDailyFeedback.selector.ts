import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { dailyFeedbackAdapter } from '../slice';

const dailyFeedbackAdapterSelectors = dailyFeedbackAdapter.getSelectors();

export const selectDailyFeedback = createSelector(
  (state: RootState) => state.dailyFeedback,
  entity => dailyFeedbackAdapterSelectors.selectAll(entity.dailyFeedbackAdapter)
);
