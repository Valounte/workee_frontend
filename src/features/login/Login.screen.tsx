import React, { useEffect } from 'react';

import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import { selectIsAuthentificated } from '@entities/user/store/selectors/selectIsAuthentificated.selector';
import { Box } from '@ui-kit';

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

  return (
    <>
      <LoginHeader />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ minHeight: '90vh', minWidth: '50vw', background: 'orange' }}>
            oui
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ minHeight: '90vh', minWidth: '50vw' }}>
            <LoginForm />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginScreen;
