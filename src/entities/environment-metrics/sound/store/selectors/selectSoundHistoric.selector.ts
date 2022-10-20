import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';
import { soundAdapter } from '../slice';

const soundAdapterSelectors = soundAdapter.getSelectors();

export const selectSound = createSelector(
  (state: RootState) => state.sound,
  entity => soundAdapterSelectors.selectAll(entity)
);
