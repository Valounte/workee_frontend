import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { isDailyFeedbackSubmittedThunk } from '@entities/dailyFeedback/store/thunks/isDailyFeedbackSubmitted.thunk';
import { getCurrentHumidityThunk } from '@entities/environment-metrics/humidity/current/store/thunks/getCurrentHumidity.thunk';
import { getCurrentLuminosityThunk } from '@entities/environment-metrics/luminosity/current/store/thunks/getCurrentLuminosity.thunk';
import { getCurrentSoundThunk } from '@entities/environment-metrics/sound/current/store/thunks/getCurrentSound.thunk';
import { getCurrentTemperatureThunk } from '@entities/environment-metrics/temperature/current/store/thunks/getCurrentTemperature.thunk';
import { getHealthAndSafetyNewsThunk } from '@entities/health-and-safety-news/store/thunks/getHealthAndSafetyNews.thunk';
import { getNotificationsThunk } from '@entities/notifications/store/thunks/getNotifications.thunk';
import { getTeaOrCoffeeMeetingThunk } from '@entities/teaOrCoffeeMeetings/store/thunks/getTeaOrCoffeeMeetings.thunk';
import { Box, DashboardIcon, Grid, Stack, Typography } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { EnvironmentMetrics } from './features/EnvironmentMetrics';
import { Feedback } from './features/Feedback';
import { LastNotifications } from './features/LastNotifications';
import { News } from './features/News';
import { NextTeaOrCoffeeMeeting } from './features/NextTeaOrCoffeeMeeting';

export const DashboardScreen = () => {
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();

  dispatch(getHealthAndSafetyNewsThunk({ token }))
    .then(() => unwrapResult)
    .catch(() => {
      console.log('error');
    });

  dispatch(
    getTeaOrCoffeeMeetingThunk({
      token,
    })
  )
    .then(() => unwrapResult)
    .catch(() => {
      console.log('error');
    });

  dispatch(isDailyFeedbackSubmittedThunk({ token }))
    .then(() => unwrapResult)
    .catch(() => {
      console.log('error');
    });

  useEffect(() => {
    fetchQuote();
    const myInterval = setInterval(fetchQuote, 60000);

    return () => {
      // should clear the interval when the component unmounts
      clearInterval(myInterval);
    };
  });

  const fetchQuote = () => {
    dispatch(getCurrentHumidityThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });

    dispatch(getCurrentLuminosityThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });

    dispatch(getCurrentSoundThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });

    dispatch(getNotificationsThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });

    dispatch(getCurrentTemperatureThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <>
      <Box height="8vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <DashboardIcon fontSize="large" />
          <Typography variant="h4">Dashboard</Typography>
        </Stack>
        <Typography variant="body1">Voici une synthèse de votre activité</Typography>
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        columns={12}
        height="87vh"
        p={2}>
        <EnvironmentMetrics />
        <Grid item md={4} xs={12}>
          <Grid container item rowSpacing={1} columnSpacing={1}>
            <Grid item md={12} xs={12}>
              <NextTeaOrCoffeeMeeting />
            </Grid>
            <Grid item md={12} xs={12}>
              <Feedback />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <LastNotifications />
        </Grid>
        <Grid item md={4} xs={12}>
          <News />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardScreen;
