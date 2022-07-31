import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';

import { HomePageScreen } from './features/homepage/Homepage.screen';
import LoginScreen from './features/login/Login.screen';
import PageNotFoundScreen from './features/page-not-found/PageNotFound.screen';
import RegisterScreen from './features/register/Register.Screen';
import UsersHandlerScreen from './features/usersHandler/UsersHandler.screen';

export const App = () => (
  <Routes>
    <Route path={RoutesEnum.login} element={<LoginScreen />} />
    <Route path={RoutesEnum.home} element={<HomePageScreen />} />
    <Route path={RoutesEnum.register} element={<RegisterScreen />} />
    <Route path={RoutesEnum.usersHandler} element={<UsersHandlerScreen />} />
    <Route path="*" element={<PageNotFoundScreen />} />
  </Routes>
);
