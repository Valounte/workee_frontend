import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addSubGoalService,
  addSubGoalServiceParams,
} from '@entities/professional-development/services/addSubGoal.service';
import { SubGoal } from '@entities/professional-development/SubGoal';

export const addSubGoalThunk = createAsyncThunk<SubGoal, addSubGoalServiceParams>(
  'post/professional-development-sub-goal',
  async builder => (await addSubGoalService(builder)).data.subGoal
);
