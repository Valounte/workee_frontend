import axios from 'axios';

import { User } from '@entities/users/User';

export interface getUsersByTeamServiceParams {
  token: string;
  teamId: number;
}

export const getUsersByTeamService = ({ token, teamId }: getUsersByTeamServiceParams) =>
  axios.get<User[]>('api/user/team', {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      teamId,
    },
  });
