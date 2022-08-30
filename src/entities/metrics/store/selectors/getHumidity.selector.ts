import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { humidityAdapter } from '../slice';

const humidityAdapterSelectors = humidityAdapter.getSelectors();

export const selectHumidity = createSelector(
  (state: RootState) => state.humidity,
  entity => humidityAdapterSelectors.selectAll(entity)
);
