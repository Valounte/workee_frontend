import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { environmentMetricsPreferencesAdapter } from '../slice';

const environmentMetricsPreferencesAdapterSelectors =
  environmentMetricsPreferencesAdapter.getSelectors();

export const selectEnvironmentMetricsPreferences = createSelector(
  (state: RootState) => state.environmentMetricsPreferences,
  entity => environmentMetricsPreferencesAdapterSelectors.selectAll(entity)
);
