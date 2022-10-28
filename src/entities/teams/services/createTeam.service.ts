import axios from 'axios';

import type { Team } from '../Team';

export interface CreateTeamServiceParams {
  token: string;
  name: string;
  description: string;
}

export interface CreateTeamServiceReturn {
  message: string;
  team: Team;
}

export const createTeamService = ({ token, name, description }: CreateTeamServiceParams) =>
  axios.post<CreateTeamServiceReturn>(
    'api/team',
    { name, description },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
