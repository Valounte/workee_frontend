import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { MainLandingPageRoutesEnum } from './MainLandingPageRoutesEnum';

const HomePageScreen = React.lazy(() => import('./homepage/Homepage.screen'));

export const LandingPageRoutes = () => (
  <Routes>
    <Route path={MainLandingPageRoutesEnum.home} element={<HomePageScreen />} />
  </Routes>
);
