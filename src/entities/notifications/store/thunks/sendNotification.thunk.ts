import { createAsyncThunk } from '@reduxjs/toolkit';

import {NotifSendBody, NotifSendResponse, sendNotificationService} from "../../services/sendNotification.service";

export const sendNotificationThunk = createAsyncThunk<NotifSendResponse, NotifSendBody>(
  'api/send-notification',
  async payload => {
    const { message } = (await sendNotificationService(payload)).data;
    return {
        message,
    };
  }
);
