import React from 'react';

import { NotAuthentificatedRoute } from '@common-features/redirects/redirectIfAuthentificated/NotAuthentificatedRoute';
import { SimpleHeader } from '@common-features/simpleHeader/SimpleHeader';
import { Container, Stack } from '@ui-kit';
import { ReactComponent as LoginImage } from '@ui-kit/images/workee-login.svg';

import { LoginForm } from './features/LoginForm';

const LoginScreen = () => (
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
            <LoginImage width="80%" />
          </Stack>
          <Stack width={{ xs: '100%', sm: '50%' }} order={{ xs: 1, sm: 2 }}>
            <LoginForm />
          </Stack>
        </Stack>
      </Container>
    </>
  </NotAuthentificatedRoute>
);

export default LoginScreen;
