import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Luminosity } from '@entities/environment-metrics/luminosity/Luminosity';

import type { getCurrentLuminosityServiceParams } from '../../services/getCurrentLuminosity.service';
import { getCurrentLuminosityService } from '../../services/getCurrentLuminosity.service';

export const getCurrentLuminosityThunk = createAsyncThunk<
  Luminosity,
  getCurrentLuminosityServiceParams
>(
  '/current_luminosity',
  async builder => (await getCurrentLuminosityService(builder)).data
);
