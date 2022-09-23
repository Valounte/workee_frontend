import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppRoutes } from './app/AppRoutes';
import { LandingPageRoutes } from './landing-page/LandingPageRoutes';
import { MainRoutesEnum } from './RoutesEnum';

const PageNotFoundScreen = React.lazy(
  () => import('@common-features/page-not-found/PageNotFound.screen')
);

export const App = () => (
  <Routes>
    <Route
      path={`${MainRoutesEnum.landingPage}/*`}
      element={<LandingPageRoutes />}
    />

    <Route path={`${MainRoutesEnum.app}/*`} element={<AppRoutes />} />

    <Route path="*" element={<PageNotFoundScreen />} />
  </Routes>
);
