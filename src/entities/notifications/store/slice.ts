import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { sendNotificationThunk } from '@entities/notifications/store/thunks/sendNotification.thunk';

import { Notification } from '../Notification';
import { getNotificationsThunk } from './thunks/getNotifications.thunk';

export const notificationsAdapter = createEntityAdapter<Notification>({
  selectId: notification => notification.id,
});

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: notificationsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getNotificationsThunk.fulfilled, (state, { payload }) => {
      notificationsAdapter.setAll(state, payload);
    });
    builder.addCase(sendNotificationThunk.fulfilled, () => {});
  },
});
