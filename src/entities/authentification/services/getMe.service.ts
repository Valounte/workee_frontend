import axios from 'axios';

import type { User } from '@entities/users/User';

export interface getMeServiceParams {
  token: string;
}
export const getMe = ({ token }: getMeServiceParams) =>
  axios.get<User>('api/me', {
    headers: {
      Authorization: `${token}`,
    },
  });
