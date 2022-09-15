import axios from 'axios';

import type { Team } from '../Team';

export interface CreateTeamServiceParams {
  token: string;
  name: string;
}

export interface CreateTeamServiceReturn {
  message: string;
  team: Team;
}

export const createTeamService = ({ token, name }: CreateTeamServiceParams) =>
  axios.post<CreateTeamServiceReturn>(
    'api/team',
    { name },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
