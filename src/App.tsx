import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { LinearProgress } from '@ui-kit';

import { AppRoutes } from './app/AppRoutes';
import { LandingPageRoutes } from './landing-page/LandingPageRoutes';
import { MainRoutesEnum } from './RoutesEnum';

const PageNotFoundScreen = React.lazy(
  () => import('@common-features/page-not-found/PageNotFound.screen')
);

export const App = () => (
  <Suspense fallback={<LinearProgress color="secondary" />}>
    <Routes>
      <Route
        path={`${MainRoutesEnum.landingPage}/*`}
        element={<LandingPageRoutes />}
      />

      <Route path={`${MainRoutesEnum.app}/*`} element={<AppRoutes />} />

      <Route path="*" element={<PageNotFoundScreen />} />
    </Routes>
  </Suspense>
);
