import React, { useCallback } from 'react';

import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { selectIsAuthentificated } from '@entities/user/store/selectors/selectIsAuthentificated.selector';
import { logoutThunk } from '@entities/user/store/thunks/logout.thunk';
import { Button, Typography } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { LoginForm } from './features/LoginForm';

const LoginScreen = () => {
  const isAuthentificated = useSelector(selectIsAuthentificated);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogoutButton = useCallback(() => {
    dispatch(logoutThunk())
      .then(() => {
        enqueueSnackbar('Successfull disconected', {
          variant: 'success',
        });
      })
      .catch(() => {});
  }, [dispatch, enqueueSnackbar]);
  return (
    <>
      <Typography>This is my Login Screen page</Typography>
      {isAuthentificated ? (
        <>
          <Typography>You are authentificated</Typography>
          <Button variant="contained" onClick={handleLogoutButton}>
            Logout
          </Button>
        </>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default LoginScreen;
