import React from 'react';

import { useJwt } from 'react-jwt';
import { useLocation } from 'react-router-dom';

import { NotAuthentificatedRoute } from '@common-features/redirects/redirectIfAuthentificated/NotAuthentificatedRoute';
import { SimpleHeader } from '@common-features/simpleHeader/SimpleHeader';
import { Box, Grid, Typography } from '@ui-kit';
import { ReactComponent as LoginImage } from '@ui-kit/images/workee-login.svg';

import { RegisterForm } from './features/RegisterForm';

interface JWTDecoded {
  email: string;
}

// #TODO: replace by the new error component
const ErrorPage = () => <Typography>your token is invalid</Typography>;

const RegisterScreen = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const token =
    searchParams.get('token') !== null ? (searchParams.get('token') as string) : '';

  const { decodedToken } = useJwt<JWTDecoded>(token);
  if (!decodedToken) {
    return <ErrorPage />;
  }
  const { email } = decodedToken;

  return (
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
              {/* #TODO: replace by register image when ready */}
              <LoginImage width="80%" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box minHeight="90vh" minWidth="50vw">
              <RegisterForm email={email} token={token} />
            </Box>
          </Grid>
        </Grid>
      </>
    </NotAuthentificatedRoute>
  );
};
export default RegisterScreen;
