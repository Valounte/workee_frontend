import { createSlice } from '@reduxjs/toolkit';

import type { User } from '../User';
import { loginThunk } from './thunks/login.thunk';
import { logoutThunk } from './thunks/logout.thunk';
import { registerThunk } from './thunks/register.thunk';

export interface UserSlice {
  user?: User;
  token?: string;
}
const initialState: UserSlice = {
  user: undefined,
  token: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => ({
      token: payload.token,
    }));
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => ({
      token: payload.token,
    }));
    builder.addCase(logoutThunk.fulfilled, () => initialState);
  },
});
