import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { User } from '../User';
import { getUsersThunk } from './thunks/getUsers.thunk';

export const usersAdapter = createEntityAdapter<User>({
  selectId: user => user.id,
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      usersAdapter.setAll(state, payload);
    });
  },
});
