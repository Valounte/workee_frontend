import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Temperature } from '@entities/environment-metrics/temperature/Temperature';

import type { getCurrentTemperatureServiceParams } from '../../services/getCurrentTemperature.service';
import { getCurrentTemperatureService } from '../../services/getCurrentTemperature.service';

export const getCurrentTemperatureThunk = createAsyncThunk<
  Temperature,
  getCurrentTemperatureServiceParams
>(
  '/current_temperature',
  async builder => (await getCurrentTemperatureService(builder)).data
);
