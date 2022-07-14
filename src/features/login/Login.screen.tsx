import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import { selectIsAuthentificated } from '@entities/user/store/selectors/selectIsAuthentificated.selector';
import { Box, Grid } from '@ui-kit';
import { ReactComponent as LoginImage } from '@ui-kit/images/workee-login.svg';

import { LoginForm } from './features/LoginForm';
import { LoginHeader } from './features/LoginHeader';

const LoginScreen = () => {
  const isAuthentificated = useSelector(selectIsAuthentificated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthentificated) {
      navigate(RoutesEnum.home);
    }
  }, [isAuthentificated, navigate]);

  if (isAuthentificated) {
    return null;
  }

  return (
    <>
      <LoginHeader />
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
  );
};

export default LoginScreen;
