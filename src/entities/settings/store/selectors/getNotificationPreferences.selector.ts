import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { notificationPreferencesAdapter } from '../slice';

const notificationPreferencesAdapterSelectors =
  notificationPreferencesAdapter.getSelectors();

export const selectNotificationPreferences = createSelector(
  (state: RootState) => state.notificationPreferences,
  entity => notificationPreferencesAdapterSelectors.selectAll(entity)
);
