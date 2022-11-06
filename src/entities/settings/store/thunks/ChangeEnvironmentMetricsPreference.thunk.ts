import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  changeEnvironmentMetricsPreference,
  ChangeEnvironmentMetricsPreferenceParams,
  ChangeEnvironmentMetricsPreferenceReturn,
} from '../../services/changeEnvironmentMetricsPreference.service';

export const changeEnvironmentMetricsPreferenceThunk = createAsyncThunk<
  ChangeEnvironmentMetricsPreferenceReturn,
  ChangeEnvironmentMetricsPreferenceParams
>('api/environment-metrics-preference', async payload => {
  const { message } = (await changeEnvironmentMetricsPreference(payload)).data;
  return {
    message,
  };
});
