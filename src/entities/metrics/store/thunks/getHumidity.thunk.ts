import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Humidity } from '../../Humidity';
import { getHumidityService } from '../../services/getHumidity.service';
import type { getHumidityServiceParams } from '../../services/getHumidity.service';

export const getHumidityThunk = createAsyncThunk<Humidity[], getHumidityServiceParams>(
  '/humidity',
  async builder => (await getHumidityService(builder)).data
);