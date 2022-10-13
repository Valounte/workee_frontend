import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../store/store';
import { notificationsAdapter } from '../slice';

const notificationsAdapterSelectors = notificationsAdapter.getSelectors();

export const selectNotifications = createSelector(
  (state: RootState) => state.notifications,
  entity => notificationsAdapterSelectors.selectAll(entity)
);
