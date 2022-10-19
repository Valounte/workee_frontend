import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTemperaturesHistoricService } from '../../services/getTemperaturesHistoric.service';
import type { getTemperaturesHistoricServiceParams } from '../../services/getTemperaturesHistoric.service';
import { Temperature } from '../../Temperature';

export const getTemperaturesHistoricThunk = createAsyncThunk<
  Temperature[],
  getTemperaturesHistoricServiceParams
>(
  '/temperature_historic',
  async builder => (await getTemperaturesHistoricService(builder)).data
);
