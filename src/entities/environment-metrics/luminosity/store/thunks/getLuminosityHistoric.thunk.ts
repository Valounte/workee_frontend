import { createAsyncThunk } from '@reduxjs/toolkit';

import { Luminosity } from '../../Luminosity';
import type { getLuminosityHistoricServiceParams } from '../../services/getLuminosityHistoric.service';
import { getLuminosityHistoricService } from '../../services/getLuminosityHistoric.service';

export const getLuminosityHistoricThunk = createAsyncThunk<
  Luminosity[],
  getLuminosityHistoricServiceParams
>(
  '/luminosity_historic',
  async builder => (await getLuminosityHistoricService(builder)).data
);
