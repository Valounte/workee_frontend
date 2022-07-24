import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTeamsService } from '../../services/getTeams.service';
import type { getTeamsServiceParams } from '../../services/getTeams.service';
import type { Team } from '../../Team';

export const getTeamsThunk = createAsyncThunk<Team[], getTeamsServiceParams>(
  '/teams',
  async builder => (await getTeamsService(builder)).data
);
