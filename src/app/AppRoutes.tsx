import React, { Suspense, useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { MainNavigation } from '@common-features/main-navigation/MainNavigation';
import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getMeThunk } from '@entities/authentification/store/thunks/getMe.thunk';
import { Stack } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { MainAppRoutesEnum } from './MainAppRoutesEnum';

const FeedbackScreen = React.lazy(() => import('./feedback/Feedback.screen'));
const EnvironmentMetricsScreen = React.lazy(
  () => import('./environment-metrics/EnvironmentMetrics.screen')
);
const UsersHandlerScreen = React.lazy(
  () => import('./usersHandler/UsersHandler.screen')
);
const PageNotFoundScreen = React.lazy(
  () => import('@common-features/page-not-found/PageNotFound.screen')
);

export const AppRoutes = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getMeThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });
  });

  return (
    <Stack direction="row" height="100vh" spacing={0}>
      <MainNavigation />
      <Suspense fallback={<>loading</>}>
        <Routes>
          <Route path={MainAppRoutesEnum.home} element={<>Dashboard</>} />
          <Route path={MainAppRoutesEnum.feedback} element={<FeedbackScreen />} />
          <Route
            path={MainAppRoutesEnum.usersHandler}
            element={<UsersHandlerScreen />}
          />
          <Route
            path={MainAppRoutesEnum.environmentMetrics}
            element={<EnvironmentMetricsScreen />}
          />
          <Route path="*" element={<PageNotFoundScreen />} />
        </Routes>
      </Suspense>
    </Stack>
  );
};
