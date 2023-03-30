import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { goalsAdapter } from '../slice';

const goalsAdapterSelectors = goalsAdapter.getSelectors();

export const selectGoalsByUser = createSelector(
  (state: RootState) => state.goals,
  entity => goalsAdapterSelectors.selectAll(entity)
);
