import {
  createEntityAdapter,
  createSlice,
  EntityAdapter,
  nanoid,
} from '@reduxjs/toolkit';

import { Team } from '@entities/teams/Team';

import { DailyFeedback } from '../DailyFeedback';
import { getDailyFeedbackThunk } from './thunks/getDailyFeedback.thunk';
import { isDailyFeedbackSubmittedThunk } from './thunks/isDailyFeedbackSubmitted.thunk';

export interface DailyFeedbackByTeam {
  averageSatisfactionDegree?: number;
  dailyFeedback?: DailyFeedback[];
  team?: Team;
  isDailyFeedbackSubmitted?: boolean;
}

export interface dailyFeedbackSliceInterface {
  dailyFeedbackAdapter: EntityAdapter<DailyFeedbackByTeam>;
  isDailyFeedbackSubmitted: boolean;
}

export const dailyFeedbackAdapter = createEntityAdapter<DailyFeedbackByTeam>({
  selectId: () => nanoid(),
});

const initialState = {
  dailyFeedbackAdapter: dailyFeedbackAdapter.getInitialState(),
  isDailyFeedbackSubmitted: false,
};

export const dailyFeedbackSlice = createSlice({
  name: 'dailyFeedback',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDailyFeedbackThunk.fulfilled, (state, { payload }) => {
      dailyFeedbackAdapter.setAll(state.dailyFeedbackAdapter, payload);
    });
    builder.addCase(
      isDailyFeedbackSubmittedThunk.fulfilled,
      (state, { payload }) => {
        state.isDailyFeedbackSubmitted = payload;
      }
    );
  },
});
