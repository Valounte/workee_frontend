import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { MainSiteVitrineRoutesEnum } from './MainSiteVitrineRoutesEnum';

const HomePageScreen = React.lazy(() => import('./homepage/Homepage.screen'));

export const SiteVitrineRoutes = () => (
  <Routes>
    <Route path={MainSiteVitrineRoutesEnum.home} element={<HomePageScreen />} />
  </Routes>
);
