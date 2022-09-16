import React from 'react';

import { useJwt } from 'react-jwt';
import { useLocation } from 'react-router-dom';

import { ErrorPage } from '@common-features/error-page/ErrorPage';
import { NotAuthentificatedRoute } from '@common-features/redirects/redirectIfAuthentificated/NotAuthentificatedRoute';
import { SimpleHeader } from '@common-features/simpleHeader/SimpleHeader';
import { Container, Stack } from '@ui-kit';
import { ReactComponent as RegisterImage } from '@ui-kit/images/password-illustration.svg';

import { RegisterForm } from './features/RegisterForm';

interface JWTDecoded {
  email: string;
}

const RegisterScreen = () => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const token =
    searchParams.get('token') !== null ? (searchParams.get('token') as string) : '';
  const { decodedToken, isExpired } = useJwt<JWTDecoded>(token);
  if (!decodedToken) {
    return (
      <>
        <SimpleHeader />
        {isExpired && <ErrorPage />}
      </>
    );
  }
  const { email } = decodedToken;

  return (
    <NotAuthentificatedRoute>
      <>
        <SimpleHeader />
        <Container maxWidth="md">
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center">
            <Stack
              direction="column"
              alignItems="flex-start"
              width={{ xs: '100%', sm: '50%' }}
              display={{ xs: 'none', sm: 'flex' }}>
              <RegisterImage width="80%" />
            </Stack>
            <Stack width={{ xs: '100%', sm: '50%' }} order={{ xs: 1, sm: 2 }}>
              <RegisterForm email={email} token={token} />
            </Stack>
          </Stack>
        </Container>
      </>
    </NotAuthentificatedRoute>
  );
};
export default RegisterScreen;
