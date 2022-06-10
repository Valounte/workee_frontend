import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginService } from '../../services/login.service';
import type { UserLoginBody } from '../../services/login.service';
import type { UserSlice } from '../slice';

export const loginThunk = createAsyncThunk<UserSlice, UserLoginBody>(
  'user/login',
  async payload => {
    const { token } = (await loginService(payload)).data;
    return {
      token,
    };
  }
);
