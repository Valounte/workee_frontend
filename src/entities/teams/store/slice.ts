import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { createTeamThunk } from './thunks/createTeam.thunk';
import { getTeamsThunk } from './thunks/getTeams.thunk';
import type { Team } from '../Team';

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
    builder.addCase(createTeamThunk.fulfilled, (state, { payload }) => {
      teamsAdapter.addOne(state, payload);
    });
  },
});
