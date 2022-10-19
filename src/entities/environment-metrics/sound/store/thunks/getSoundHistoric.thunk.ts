import { createAsyncThunk } from '@reduxjs/toolkit';

import type { getSoundHistoricServiceParams } from '../../services/getSoundHistoric.service';
import { getSoundHistoricService } from '../../services/getSoundHistoric.service';
import { Sound } from '../../Sound';

export const getSoundHistoricThunk = createAsyncThunk<
  Sound[],
  getSoundHistoricServiceParams
>('/sound_historic', async builder => (await getSoundHistoricService(builder)).data);
