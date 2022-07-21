import axios from 'axios';

import type { Team } from '../Team';

export interface getTeamsServiceParams {
  token: string;
}
export const getTeamsService = ({ token }: getTeamsServiceParams) =>
  axios.get<Team[]>('api/teams', {
    headers: {
      Authorization: `${token}`,
    },
  });
