import { createSlice } from '@reduxjs/toolkit';

import type { User } from '../User';
import { loginThunk } from './thunks/login.thunk';

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
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => ({
      token: payload.token,
    }));
  },
});
