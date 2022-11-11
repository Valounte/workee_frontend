import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getCurrentHumidityThunk } from '@entities/environment-metrics/humidity/current/store/thunks/getCurrentHumidity.thunk';
import { getCurrentLuminosityThunk } from '@entities/environment-metrics/luminosity/current/store/thunks/getCurrentLuminosity.thunk';
import { getCurrentSoundThunk } from '@entities/environment-metrics/sound/current/store/thunks/getCurrentSound.thunk';
import { getCurrentTemperatureThunk } from '@entities/environment-metrics/temperature/current/store/thunks/getCurrentTemperature.thunk';
import { getHealthAndSafetyNewsThunk } from '@entities/health-and-safety-news/store/thunks/getHealthAndSafetyNews.thunk';
import { Grid, Stack, styled, Typography } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { EnvironmentMetrics } from './features/EnvironmentMetrics';
import { Feedback } from './features/Feedback';
import { LastNotifications } from './features/LastNotifications';
import { News } from './features/News';
import { NextTeaOrCoffeeMeeting } from './features/NextTeaOrCoffeeMeeting';

const StyledContainer = styled.div`
  margin: 0;
  background-color: #f3f3f3;
  height: 100%;
  width: 100%;
`;

const StyledTitle = styled(Typography)`
  margin-top: 18px;
  margin-left: 29px;
`;

const StyledSubTitle = styled(Typography)`
  margin-left: 29px;
`;

const StyledNewsBox = styled.div`
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  margin-top: 15px;
  display: flex;
  flex-flow: column;
  height: 650px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const StyledNotifAndFeedbackBox = styled.div`
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  margin-top: 15px;
  display: flex;
  flex-flow: column;
  height: 380px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const StyledGrid = styled(Grid)`
  padding-right: 29px;
  padding-left: 29px;
`;

const StyledTeaOrCoffee = styled.div`
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  margin-top: 15px;
  display: flex;
  flex-flow: column;
  height: 255px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const DashboardScreen = () => {
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();

  dispatch(getHealthAndSafetyNewsThunk({ token }))
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

    dispatch(getCurrentTemperatureThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <StyledContainer>
      <StyledTitle variant="h4">Dashboard</StyledTitle>
      <StyledSubTitle variant="body1">
        Voici une synthèse de votre activité
      </StyledSubTitle>
      <EnvironmentMetrics />

      <StyledGrid container spacing={2}>
        <Grid item md={4}>
          <StyledNotifAndFeedbackBox>
            <Feedback />
          </StyledNotifAndFeedbackBox>
        </Grid>
        <Grid item md={4}>
          <Stack spacing={2}>
            <StyledNotifAndFeedbackBox>
              <LastNotifications />
            </StyledNotifAndFeedbackBox>
            <StyledTeaOrCoffee>
              <NextTeaOrCoffeeMeeting />
            </StyledTeaOrCoffee>
          </Stack>
        </Grid>
        <Grid item md={4}>
          <StyledNewsBox>
            <News />
          </StyledNewsBox>
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
};

export default DashboardScreen;
