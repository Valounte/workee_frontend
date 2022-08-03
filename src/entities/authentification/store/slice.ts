import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../users/User';
import { loginThunk } from './thunks/login.thunk';
import { logoutThunk } from './thunks/logout.thunk';
import { registerThunk } from './thunks/register.thunk';

export interface AutentificationSlice {
  user?: User;
  token?: string;
}
const initialState: AutentificationSlice = {
  user: undefined,
  token: undefined,
};

export const authentificationSlice = createSlice({
  name: 'authentification',
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
