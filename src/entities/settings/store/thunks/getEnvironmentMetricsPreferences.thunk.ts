import { createAsyncThunk } from '@reduxjs/toolkit';

import { EnvironmentMetricsPreferences } from '@entities/settings/EnvironmentMetricsPreferences';
import {
  getEnvironmentMetricsPreferencesParams,
  getEnvironmentMetricsPreferencesService,
} from '@entities/settings/services/getEnvironmentMetricsPreferences.service';

export const getEnvironmentMetricsPreferencesThunk = createAsyncThunk<
  EnvironmentMetricsPreferences[],
  getEnvironmentMetricsPreferencesParams
>(
  '/environment-metrics-preferences',
  async builder => (await getEnvironmentMetricsPreferencesService(builder)).data
);
