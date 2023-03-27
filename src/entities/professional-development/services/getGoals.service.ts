import axios from 'axios';

import type { Goal } from '../Goal';

export interface getGoalsServiceParams {
token: string;
userId?: number;
}

export const getGoalsService = ({ token, userId }: getGoalsServiceParams) =>
axios.get<Goal[]>('api/professional-development-goal', {
headers: {
  Authorization: `${token}`,
},
params: {
  userId,
},
});