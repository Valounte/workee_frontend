import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Sound } from '@entities/environment-metrics/sound/Sound';

import type { getCurrentSoundServiceParams } from '../../services/getCurrentSound.service';
import { getCurrentSoundService } from '../../services/getCurrentSound.service';

export const getCurrentSoundThunk = createAsyncThunk<
  Sound,
  getCurrentSoundServiceParams
>(
  '/current_sound',
  async builder => (await getCurrentSoundService(builder)).data
);
