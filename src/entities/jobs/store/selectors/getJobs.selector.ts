import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { jobsAdapter } from '../slice';

const jobsAdapterSelectors = jobsAdapter.getSelectors();

export const selectJobs = createSelector(
  (state: RootState) => state.jobs,
  entity => jobsAdapterSelectors.selectAll(entity)
);
