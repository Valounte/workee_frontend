import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LastWeekDailyFeedback } from '../LastWeekDailyFeedback';
import { getDailyFeedbackThunk } from './thunks/getDailyFeedback.thunk';

export const dailyFeedbackAdapter = createEntityAdapter<LastWeekDailyFeedback>({
  selectId: dailyFeedback => dailyFeedback.id,
});

export const dailyFeedbackSlice = createSlice({
  name: 'dailyFeedback',
  initialState: dailyFeedbackAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDailyFeedbackThunk.fulfilled, (state, { payload }) => {
        dailyFeedbackAdapter.setAll(state, payload);
    });
  },
});
