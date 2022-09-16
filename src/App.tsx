import React from 'react';

import { Route, Routes } from 'react-router-dom';

import PageNotFoundScreen from '@common-features/page-not-found/PageNotFound.screen';

import { AppRoutes } from './app/AppRoutes';
import { MainRoutesEnum } from './RoutesEnum';
import { SiteVitrineRoutes } from './site-vitrine/SiteVitrineRoutes';

export const App = () => (
  <Routes>
    <Route
      path={`${MainRoutesEnum.siteVitrine}/*`}
      element={<SiteVitrineRoutes />}
    />

    <Route path={`${MainRoutesEnum.app}/*`} element={<AppRoutes />} />

    <Route path="*" element={<PageNotFoundScreen />} />
  </Routes>
);
