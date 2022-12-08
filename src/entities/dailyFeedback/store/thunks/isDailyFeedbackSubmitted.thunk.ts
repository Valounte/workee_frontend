import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  isDailyFeedbackSubmittedParams,
  isDailyFeedbackSubmittedService,
} from '@entities/dailyFeedback/services/isDailyFeedbackSubmitted.service';

export const isDailyFeedbackSubmittedThunk = createAsyncThunk<
  boolean,
  isDailyFeedbackSubmittedParams
>(
  '/is-daily-feedback-submitted',
  async builder => (await isDailyFeedbackSubmittedService(builder)).data
);
