import axios from 'axios';

import { User } from '../User';

export type UserLoginBody = Pick<User, 'email'> & {
  password: string;
};

interface UserLoginResponse {
  data: { token: string; message: string };
  status: string;
}

export const loginService = (params: UserLoginBody) =>
  axios.post<UserLoginResponse>('/api/login', {
    login: params.email,
    password: params.password,
  });
