import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createTeamService,
  CreateTeamServiceParams,
} from '@entities/teams/services/createTeam.service';
import type { Team } from '@entities/teams/Team';

export const createTeamThunk = createAsyncThunk<Team, CreateTeamServiceParams>(
  'post/team',
  async builder => (await createTeamService(builder)).data.data
);
