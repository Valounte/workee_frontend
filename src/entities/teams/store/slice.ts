import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import type { Team } from '../Team';
import { getTeamsThunk } from './thunks/getAllTeams.thunk';

export const teamsAdapter = createEntityAdapter<Team>({
  selectId: team => team.id,
});

export const teamSlice = createSlice({
  name: 'teams',
  initialState: teamsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTeamsThunk.fulfilled, (state, { payload }) => {
      teamsAdapter.setAll(state, payload);
    });
  },
});
