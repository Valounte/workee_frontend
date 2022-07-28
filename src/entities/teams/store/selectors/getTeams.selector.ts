import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { teamsAdapter } from '../slice';

const teamsAdapterSelectors = teamsAdapter.getSelectors();

export const selectTeams = createSelector(
  (state: RootState) => state.teams,
  entity => teamsAdapterSelectors.selectAll(entity)
);
