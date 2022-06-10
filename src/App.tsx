import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';

import LoginScreen from './features/login/Login.screen';

export const App = () => (
  <Routes>
    <Route path={RoutesEnum.login} element={<LoginScreen />} />
  </Routes>
);
