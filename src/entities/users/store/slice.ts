import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { User } from '../User';

export const usersAdapter = createEntityAdapter<User>({
  selectId: user => user.id,
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: () => {},
});
