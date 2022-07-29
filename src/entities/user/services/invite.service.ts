import axios from 'axios';

import { User } from '../User';

export type InviteUserBody = Pick<User, 'email'> & {
  firstname: string;
  lastname: string;
  job: number;
  teams: number[];
  token: string;
};

interface InviteUserResponse {
  token: string;
  message: string;
}

export const inviteService = (params: InviteUserBody) =>
  axios.post<InviteUserResponse>(
    '/api/invite/user',
    {
      email: params.email,
      firstname: params.firstname,
      lastname: params.lastname,
      jobId: params.job,
      teamsId: params.teams,
    },
    {
      headers: {
        Authorization: `${params.token}`,
      },
    }
  );
