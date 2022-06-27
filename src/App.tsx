import React, { useCallback } from 'react';

import { Typography, Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import { selectIsAuthentificated } from '@entities/user/store/selectors/selectIsAuthentificated.selector';
import { logoutThunk } from '@entities/user/store/thunks/logout.thunk';

import LoginScreen from './features/login/Login.screen';
import { useAppDispatch } from './store/useAppDispatch';

export const App = () => {
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
      <Routes>
        <Route path={RoutesEnum.login} element={<LoginScreen />} />
      </Routes>
      {isAuthentificated && (
        <>
          <Typography>You are authentificated</Typography>
          <Button variant="contained" onClick={handleLogoutButton}>
            Logout
          </Button>
        </>
      )}
    </>
  );
};
