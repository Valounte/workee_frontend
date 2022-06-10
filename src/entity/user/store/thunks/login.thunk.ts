import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginService } from '../../services/login.service';
import type { UserLoginBody } from '../../services/login.service';
import type { UserSlice } from '../slice';

export const loginThunk = createAsyncThunk<UserSlice, UserLoginBody>(
  'user/login',
  async payload => {
    const { data } = await loginService(payload);
    const { token } = data.data;
    return {
      token,
    };
  }
);
