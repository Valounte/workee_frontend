import React from 'react';

import { Route, Routes } from 'react-router-dom';

import PageNotFoundScreen from '@common-features/page-not-found/PageNotFound.screen';

import EnvironmentMetricsScreen from './environment-metrics/EnvironmentMetrics.screen';
import LoginScreen from './login/Login.screen';
import { MainAppRoutesEnum } from './MainAppRoutesEnum';
import RegisterScreen from './register/Register.Screen';
import UsersHandlerScreen from './usersHandler/UsersHandler.screen';

export const AppRoutes = () => (
  <Routes>
    <Route path={MainAppRoutesEnum.home} element={<>Dashboard</>} />
    <Route path={MainAppRoutesEnum.login} element={<LoginScreen />} />
    <Route path={MainAppRoutesEnum.register} element={<RegisterScreen />} />
    <Route path={MainAppRoutesEnum.usersHandler} element={<UsersHandlerScreen />} />
    <Route
      path={MainAppRoutesEnum.environmentMetrics}
      element={<EnvironmentMetricsScreen />}
    />
    <Route path="*" element={<PageNotFoundScreen />} />
  </Routes>
);
