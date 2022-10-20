import { createAsyncThunk } from '@reduxjs/toolkit';

import { Humidity } from '../../Humidity';
import type { getHumidityHistoricServiceParams } from '../../services/getHumidityHistoric.service';
import { getHumidityHistoricService } from '../../services/getHumidityHistoric.service';

export const getHumidityHistoricThunk = createAsyncThunk<
  Humidity[],
  getHumidityHistoricServiceParams
>(
  '/humidity_historic',
  async builder => (await getHumidityHistoricService(builder)).data
);
