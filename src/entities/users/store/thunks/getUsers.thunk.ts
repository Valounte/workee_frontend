import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUsersService } from '../../services/getUsers.service';
import type { getUsersServiceParams } from '../../services/getUsers.service';
import type { User } from '../../User';

export const getUsersThunk = createAsyncThunk<User[], getUsersServiceParams>(
  '/users',
  async builder => (await getUsersService(builder)).data
);
