import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Notification } from '../../Notification';
import { getNotificationsService } from '../../services/getNotifications.service';
import type { getNotificationsServiceParams } from '../../services/getNotifications.service';

export const getNotificationsThunk = createAsyncThunk<
  Notification[],
  getNotificationsServiceParams
>('/notifications', async builder => (await getNotificationsService(builder)).data);
