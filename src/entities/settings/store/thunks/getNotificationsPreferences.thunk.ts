import { createAsyncThunk } from '@reduxjs/toolkit';

import { NotificationPreferences } from '@entities/settings/NotificationPreferences';
import {
  getNotificationPreferencesParams,
  getNotificationPreferencesService,
} from '@entities/settings/services/getNotificationPreferences.service';

export const getNotificationsPreferencesThunk = createAsyncThunk<
  NotificationPreferences[],
  getNotificationPreferencesParams
>(
  '/notification-preferences',
  async builder => (await getNotificationPreferencesService(builder)).data
);
