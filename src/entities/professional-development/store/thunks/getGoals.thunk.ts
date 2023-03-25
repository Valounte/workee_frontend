import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Goal } from '../../Goal';
import { getGoalsService } from '../../services/getGoals.service';
import type { getGoalsServiceParams } from '../../services/getGoals.service';

export const getGoalsThunk = createAsyncThunk<Goal[], getGoalsServiceParams>(
  '/professional-development-goal',
  async builder => (await getGoalsService(builder)).data
);
