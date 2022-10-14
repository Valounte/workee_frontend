import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';
import { temperaturesAdapter } from '../slice';

const temperaturesAdapterSelectors = temperaturesAdapter.getSelectors();

export const selectTemperatures = createSelector(
  (state: RootState) => state.temperature,
  entity => temperaturesAdapterSelectors.selectAll(entity)
);
