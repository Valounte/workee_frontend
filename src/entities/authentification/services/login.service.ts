import axios from 'axios';

import { User } from '../../users/User';

export type UserLoginBody = Pick<User, 'email'> & {
  password: string;
};

interface UserLoginResponse {
  token: string;
  message: string;
}

export const loginService = (params: UserLoginBody) =>
  axios.post<UserLoginResponse>('/api/login', {
    email: params.email,
    password: params.password,
  });
