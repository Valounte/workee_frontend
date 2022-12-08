import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit';

import { Team } from '@entities/teams/Team';

import { DailyFeedback } from '../DailyFeedback';
import { getDailyFeedbackThunk } from './thunks/getDailyFeedback.thunk';

export interface DailyFeedbackByTeam {
  averageSatisfactionDegree?: number;
  dailyFeedback?: DailyFeedback[];
  team?: Team;
}

export const dailyFeedbackAdapter = createEntityAdapter<DailyFeedbackByTeam>({
  selectId: () => nanoid(),
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
