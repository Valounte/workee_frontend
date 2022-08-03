import { createAsyncThunk } from '@reduxjs/toolkit';

import { registerService } from '../../services/register.service';
import type { UserRegisterBody } from '../../services/register.service';
import type { AutentificationSlice } from '../slice';

export const registerThunk = createAsyncThunk<
  AutentificationSlice,
  UserRegisterBody
>('user/registration/password', async payload => {
  const { token } = (await registerService(payload)).data;
  return {
    token,
  };
});
