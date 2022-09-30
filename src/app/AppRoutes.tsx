import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getMeThunk } from '@entities/authentification/store/thunks/getMe.thunk';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { MainAppRoutesEnum } from './MainAppRoutesEnum';

const LoginScreen = React.lazy(() => import('./login/Login.screen'));
const RegisterScreen = React.lazy(() => import('./register/Register.Screen'));
const EnvironmentMetricsScreen = React.lazy(
  () => import('./environment-metrics/EnvironmentMetrics.screen')
);
const UsersHandlerScreen = React.lazy(
  () => import('./usersHandler/UsersHandler.screen')
);
const PageNotFoundScreen = React.lazy(
  () => import('@common-features/page-not-found/PageNotFound.screen')
);

export const AppRoutes = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getMeThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });
  });

  return (
    <Routes>
      <Route path={MainAppRoutesEnum.home} element={<>Dashboard</>} />
      <Route path={MainAppRoutesEnum.login} element={<LoginScreen />} />
      <Route path={MainAppRoutesEnum.register} element={<RegisterScreen />} />
      <Route
        path={MainAppRoutesEnum.usersHandler}
        element={<UsersHandlerScreen />}
      />
      <Route
        path={MainAppRoutesEnum.environmentMetrics}
        element={<EnvironmentMetricsScreen />}
      />
      <Route path="*" element={<PageNotFoundScreen />} />
    </Routes>
  );
};
