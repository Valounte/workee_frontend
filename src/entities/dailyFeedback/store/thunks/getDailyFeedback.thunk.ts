import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDailyFeedbackParams, getDailyFeedbackService } from '@entities/dailyFeedback/services/getDailyFeedback.service';
import { LastWeekDailyFeedback } from '@entities/dailyFeedback/LastWeekDailyFeedback';

export const getDailyFeedbackThunk = createAsyncThunk<LastWeekDailyFeedback, getDailyFeedbackParams>(
  '/last-week-daily-feedback',
  async builder => (await getDailyFeedbackService(builder)).data
);
