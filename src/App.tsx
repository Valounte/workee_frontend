import React, { useCallback } from 'react';

import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import { selectIsAuthentificated } from '@entities/user/store/selectors/selectIsAuthentificated.selector';
import { logoutThunk } from '@entities/user/store/thunks/logout.thunk';
import { Button, Typography } from '@ui-kit';

import { Footer } from './common-features/footer/Footer';
import { HomePageScreen } from './features/homepage/Homepage.screen';
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
        <Route path={RoutesEnum.home} element={<HomePageScreen />} />
      </Routes>
      <Footer />
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
