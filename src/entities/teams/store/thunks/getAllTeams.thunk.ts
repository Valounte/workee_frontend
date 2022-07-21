import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTeamsService } from '../../services/getAllTeams.service';
import type { getTeamsServiceParams } from '../../services/getAllTeams.service';
import type { Team } from '../../Team';

export const getTeamsThunk = createAsyncThunk<Team[], getTeamsServiceParams>(
  '/teams',
  async builder => (await getTeamsService(builder)).data
);
