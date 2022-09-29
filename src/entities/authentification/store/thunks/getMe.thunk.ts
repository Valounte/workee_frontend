import { createAsyncThunk } from '@reduxjs/toolkit';

import type { User } from '@entities/users/User';

import type { getMeServiceParams } from '../../services/getMe.service';
import { getMe } from '../../services/getMe.service';

export const getMeThunk = createAsyncThunk<User, getMeServiceParams>(
  '/me',
  async builder => (await getMe(builder)).data
);
