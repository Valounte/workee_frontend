import React, { Suspense, useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { MainNavigation } from '@common-features/main-navigation/MainNavigation';
import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getMeThunk } from '@entities/authentification/store/thunks/getMe.thunk';
import { Container, LinearProgress, Stack, styled } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { MainAppRoutesEnum } from './MainAppRoutesEnum';

const FeedbackScreen = React.lazy(() => import('./feedback/Feedback.screen'));
const DashboardScreen = React.lazy(() => import('./dashboard/Dashboard.screen'));
const UserProfileScreen = React.lazy(
  () => import('./user-profile/UserProfile.Screen')
);
const Settings = React.lazy(() => import('./settings/Settings.Screen'));
const EnvironmentMetricsScreen = React.lazy(
  () => import('./environment-metrics/EnvironmentMetrics.screen')
);
const NotificationsScreen = React.lazy(
  () => import('./notification-manager/notificationManager.screen')
);
const UsersHandlerScreen = React.lazy(
  () => import('./usersHandler/UsersHandler.screen')
);
const PageNotFoundScreen = React.lazy(
  () => import('@common-features/page-not-found/PageNotFound.screen')
);

const StyledContainer = styled(Container)`
  margin: 0;
  height: 100%;
  background-color: hsla(16, 100%, 87%, 1);
  background-image: radial-gradient(
      at 65% 53%,
      hsla(17, 92%, 80%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 100% 1%, hsla(24, 94%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 7% 6%, hsla(44, 100%, 98%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 77%, hsla(40, 80%, 96%, 1) 0px, transparent 50%),
    radial-gradient(at 18% 77%, hsla(36, 100%, 85%, 1) 0px, transparent 50%);
`;

export const AppRoutes = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getMeThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.error('error');
      });
  });

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      height={{ md: '100vh', sm: '195vh', xs: '209vh' }}
      width="100vw"
      spacing={0}>
      <MainNavigation />
      <StyledContainer maxWidth={false}>
        <Suspense fallback={<LinearProgress color="secondary" />}>
          <Routes>
            <Route path={MainAppRoutesEnum.home} element={<DashboardScreen />} />
            <Route path={MainAppRoutesEnum.feedback} element={<FeedbackScreen />} />
            <Route
              path={MainAppRoutesEnum.userProfile}
              element={<UserProfileScreen />}
            />
            <Route path={MainAppRoutesEnum.settings} element={<Settings />} />
            <Route
              path={MainAppRoutesEnum.usersHandler}
              element={<UsersHandlerScreen />}
            />
            <Route
              path={MainAppRoutesEnum.environmentMetrics}
              element={<EnvironmentMetricsScreen />}
            />
            <Route
              path={MainAppRoutesEnum.notifications}
              element={<NotificationsScreen />}
            />
            <Route path="*" element={<PageNotFoundScreen />} />
          </Routes>
        </Suspense>
      </StyledContainer>
    </Stack>
  );
};
