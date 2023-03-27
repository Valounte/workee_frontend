import axios from 'axios';

import type { Goal } from '../Goal';

export interface getGoalsByUserServiceParams {
  token: string;
  userId: number;
}

export const getGoalsByUserService = ({
  token,
  userId,
}: getGoalsByUserServiceParams) =>
  axios.get<Goal[]>('api/professional-development-goal-user', {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      userId,
    },
  });
