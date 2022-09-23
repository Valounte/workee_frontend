import React from 'react';

import { Route, Routes } from 'react-router-dom';

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
