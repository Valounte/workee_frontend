import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../../store/store';
import { luminosityAdapter } from '../slice';

const luminosityAdapterSelectors = luminosityAdapter.getSelectors();

export const selectLuminosity = createSelector(
  (state: RootState) => state.luminosity,
  entity => luminosityAdapterSelectors.selectAll(entity)
);
