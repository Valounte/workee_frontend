import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  editSubGoalService,
  editSubGoalServiceParams,
} from '@entities/professional-development/services/editSubGoal.service';
import { SubGoal } from '@entities/professional-development/SubGoal';

export const editSubGoalThunk = createAsyncThunk<SubGoal, editSubGoalServiceParams>(
  'put/professional-development-sub-goal',
  async builder => (await editSubGoalService(builder)).data.subGoal
);
