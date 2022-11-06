import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { healthAndSafetyNewsAdapter } from '../slice';

const healthAndSafetyNewsSelectors = healthAndSafetyNewsAdapter.getSelectors();

export const selectHealthAndSafetyNews = createSelector(
  (state: RootState) => state.healthAndSafetyNews,
  entity => healthAndSafetyNewsSelectors.selectAll(entity)
);
