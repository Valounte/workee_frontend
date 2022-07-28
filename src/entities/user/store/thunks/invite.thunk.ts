import { createAsyncThunk } from '@reduxjs/toolkit';

import { inviteService } from '../../services/invite.service';
import type { InviteUserBody } from '../../services/invite.service';
import type { UserSlice } from '../slice';

export const inviteThunk = createAsyncThunk<UserSlice, InviteUserBody>(
  'user/invite/user',
  async payload => {
    const { token } = (await inviteService(payload)).data;
    return {
      token,
    };
  }
);
