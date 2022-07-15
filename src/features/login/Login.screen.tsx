import React from 'react';

import { NotAuthentificatedRoute } from '@common-features/redirects/redirectIfAuthentificated/NotAuthentificatedRoute';
import { SimpleHeader } from '@common-features/simpleHeader/SimpleHeader';
import { Box, Grid } from '@ui-kit';
import { ReactComponent as LoginImage } from '@ui-kit/images/workee-login.svg';

import { LoginForm } from './features/LoginForm';

const LoginScreen = () => (
  <NotAuthentificatedRoute>
    <>
      <SimpleHeader />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            minHeight="90vh"
            minWidth="50vw"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <LoginImage width="80%" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box minHeight="90vh" minWidth="50vw">
            <LoginForm />
          </Box>
        </Grid>
      </Grid>
    </>
  </NotAuthentificatedRoute>
);

export default LoginScreen;
