import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Humidity } from '@entities/environment-metrics/humidity/Humidity';

import type { getCurrentHumidityServiceParams } from '../../services/getCurrentHumidity.service';
import { getCurrentHumidityService } from '../../services/getCurrentHumidity.service';

export const getCurrentHumidityThunk = createAsyncThunk<
  Humidity,
  getCurrentHumidityServiceParams
>(
  '/current_humidity',
  async builder => (await getCurrentHumidityService(builder)).data
);
