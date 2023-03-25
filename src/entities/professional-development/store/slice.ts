import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Goal } from '../Goal';
import { SubGoal } from '../SubGoal';
import { addSubGoalThunk } from './thunks/addSubGoal.thunk';
import { getGoalsThunk } from './thunks/getGoals.thunk';

export const goalsAdapter = createEntityAdapter<Goal>({
  selectId: goal => goal.id,
});

export const subGoalsAdapter = createEntityAdapter<SubGoal>({
  selectId: subGoal => subGoal.id,
});

export const goalsSlice = createSlice({
  name: 'goals',
  initialState: goalsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getGoalsThunk.fulfilled, (state, { payload }) => {
      goalsAdapter.setAll(state, payload);
    });
  },
});

export const subGoalsSlice = createSlice({
  name: 'subGoals',
  initialState: subGoalsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addSubGoalThunk.fulfilled, (state, { payload }) => {
      subGoalsAdapter.addOne(state, payload);
    });
  },
});
