import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { MainLandingPageRoutesEnum } from './MainLandingPageRoutesEnum';
import { MainAppRoutesEnum } from '../app/MainAppRoutesEnum';

const HomePageScreen = React.lazy(() => import('./homepage/Homepage.screen'));

const LoginScreen = React.lazy(() => import('../app/login/Login.screen'));
const RegisterScreen = React.lazy(() => import('../app/register/Register.Screen'));

export const LandingPageRoutes = () => (
  <Routes>
    <Route path={MainLandingPageRoutesEnum.home} element={<HomePageScreen />} />
    <Route path={MainAppRoutesEnum.login} element={<LoginScreen />} />
    <Route path={MainAppRoutesEnum.register} element={<RegisterScreen />} />
  </Routes>
);
