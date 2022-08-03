import axios from 'axios';

import type { User } from '../User';

export interface getUsersServiceParams {
  token: string;
}
export const getUsersService = ({ token }: getUsersServiceParams) =>
  axios.get<User[]>('api/users', {
    headers: {
      Authorization: `${token}`,
    },
  });
