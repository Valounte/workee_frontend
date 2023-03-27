import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getGoalsByUserService,
  getGoalsByUserServiceParams,
} from '@entities/professional-development/services/getGoalsByUser.service';

import type { Goal } from '../../Goal';

export const getGoalsByUserThunk = createAsyncThunk<
  Goal[],
  getGoalsByUserServiceParams
>(
  '/professional-development-goal-user',
  async builder => (await getGoalsByUserService(builder)).data
);
