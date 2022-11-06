import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  changeNotificationPreference,
  ChangeNotificationPreferenceParams,
  ChangeNotificationPreferenceReturn,
} from '../../services/changeNotificationPreference.service';

export const changeNotificationPreferenceThunk = createAsyncThunk<
  ChangeNotificationPreferenceReturn,
  ChangeNotificationPreferenceParams
>('api/notification-preference', async payload => {
  const { message } = (await changeNotificationPreference(payload)).data;
  return {
    message,
  };
});
