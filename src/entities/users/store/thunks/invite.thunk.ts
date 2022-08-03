import { createAsyncThunk } from '@reduxjs/toolkit';

import { inviteService } from '../../../authentification/services/invite.service';
import type { InviteUserBody } from '../../../authentification/services/invite.service';
import type { AutentificationSlice } from '../../../authentification/store/slice';

export const inviteThunk = createAsyncThunk<AutentificationSlice, InviteUserBody>(
  'user/invite/user',
  async payload => {
    const { token } = (await inviteService(payload)).data;
    return {
      token,
    };
  }
);
