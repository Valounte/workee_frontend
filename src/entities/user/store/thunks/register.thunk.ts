import { createAsyncThunk } from '@reduxjs/toolkit';

import { registerService } from '../../services/register.service';
import type { UserRegisterBody } from '../../services/register.service';
import type { UserSlice } from '../slice';

export const registerThunk = createAsyncThunk<UserSlice, UserRegisterBody>(
  'user/registration/password',
  async payload => {
    const { token } = (await registerService(payload)).data;
    return {
      token,
    };
  }
);
