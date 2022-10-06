import { createSlice } from '@reduxjs/toolkit';

import { Team } from '@entities/teams/Team';

import { DailyFeedback } from '../DailyFeedback';
import { getDailyFeedbackThunk } from './thunks/getDailyFeedback.thunk';

export interface DailyFeedbackSlice {
  averageSatisfactionDegree?: number;
  dailyFeedback?: DailyFeedback[];
  team?: Team;
}
const initialState: DailyFeedbackSlice = {
  averageSatisfactionDegree: undefined,
  dailyFeedback: undefined,
  team: undefined,
};

export const dailyFeedbackSlice = createSlice({
  name: 'dailyFeedback',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDailyFeedbackThunk.fulfilled, (state, { payload }) => {
      state.team = payload.team;
    });
  },
});
