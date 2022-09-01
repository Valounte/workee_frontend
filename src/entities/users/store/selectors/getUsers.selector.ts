import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { usersAdapter } from '../slice';

const usersAdapterSelectors = usersAdapter.getSelectors();

export const selectUsers = createSelector(
  (state: RootState) => state.users,
  entity => usersAdapterSelectors.selectAll(entity)
);
