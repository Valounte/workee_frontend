import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';

export const selectSelectedTeams = createSelector(
  (state: RootState) => state.feedbackFeature,
  entity => entity.selectedTeams
);
