import { createAsyncThunk } from '@reduxjs/toolkit';

import { LastWeekDailyFeedback } from '@entities/dailyFeedback/LastWeekDailyFeedback';
import {
  getDailyFeedbackParams,
  getDailyFeedbackService,
} from '@entities/dailyFeedback/services/getDailyFeedback.service';

export const getDailyFeedbackThunk = createAsyncThunk<
  LastWeekDailyFeedback,
  getDailyFeedbackParams
>(
  '/last-week-daily-feedback',
  async builder => (await getDailyFeedbackService(builder)).data
);
