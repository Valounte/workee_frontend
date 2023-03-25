import axios from 'axios';

import type { Goal } from '../Goal';

export interface getGoalsServiceParams {
  token: string;
}

export const getGoalsService = ({ token }: getGoalsServiceParams) =>
  axios.get<Goal[]>('api/professional-development-goal', {
    headers: {
      Authorization: `${token}`,
    },
  });
