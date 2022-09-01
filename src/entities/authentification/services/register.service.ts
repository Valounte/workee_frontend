import axios from 'axios';

export type UserRegisterBody = {
  password: string;
  token: string;
};

interface UserRegisterResponse {
  token: string;
  message: string;
}

export const registerService = (params: UserRegisterBody) =>
  axios.put<UserRegisterResponse>(
    '/api/registration/password',
    {
      password: params.password,
    },
    {
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    }
  );
