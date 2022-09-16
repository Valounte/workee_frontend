import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { HomePageScreen } from './homepage/Homepage.screen';
import { MainSiteVitrineRoutesEnum } from './MainSiteVitrineRoutesEnum';

export const SiteVitrineRoutes = () => (
  <Routes>
    <Route path={MainSiteVitrineRoutesEnum.home} element={<HomePageScreen />} />
  </Routes>
);
