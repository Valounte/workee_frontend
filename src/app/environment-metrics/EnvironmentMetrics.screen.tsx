import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getCurrentHumidityThunk } from '@entities/environment-metrics/humidity/current/store/thunks/getCurrentHumidity.thunk';
import { getHumidityHistoricThunk } from '@entities/environment-metrics/humidity/store/thunks/getHumidityHistoric.thunk';
import { getCurrentLuminosityThunk } from '@entities/environment-metrics/luminosity/current/store/thunks/getCurrentLuminosity.thunk';
import { getLuminosityHistoricThunk } from '@entities/environment-metrics/luminosity/store/thunks/getLuminosityHistoric.thunk';
import { getCurrentSoundThunk } from '@entities/environment-metrics/sound/current/store/thunks/getCurrentSound.thunk';
import { getSoundHistoricThunk } from '@entities/environment-metrics/sound/store/thunks/getSoundHistoric.thunk';
import { getCurrentTemperatureThunk } from '@entities/environment-metrics/temperature/current/store/thunks/getCurrentTemperature.thunk';
import { getTemperaturesHistoricThunk } from '@entities/environment-metrics/temperature/store/thunks/getTemperaturesHistoric.thunk';
import {
  styled,
  Container,
  Grid,
  Box,
  Stack,
  Typography,
  MetricsIcon,
} from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';
import { MainRoutesEnum } from 'src/RoutesEnum';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { Humidity } from './features/humidity/Humidity';
import { Luminosity } from './features/luminosity/Luminosity';
import { Sound } from './features/sound/Sound';
import { Temperature } from './features/temperature/Temperature';

const StyledContainer = styled(Container)`
  margin: 0;
  background-color: #f3f3f3;
`;

export const EnvironmentMetricsScreen = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  if (!token) {
    // TODO: rediriger plutot sur la page "tu n'as pas access a cette page"
    navigate(`${MainRoutesEnum.app}${MainAppRoutesEnum.login}`);
  }
  const dispatch = useAppDispatch();
  const [date, setDate] = React.useState('');

  useEffect(() => {
    fetchQuote();
    getCurrentDate();
    const myInterval = setInterval(fetchQuote, 60000);
    const dateInterval = setInterval(getCurrentDate, 60000);

    return () => {
      // should clear the interval when the component unmounts
      clearInterval(myInterval);
      clearInterval(dateInterval);
    };
  });

  const fetchQuote = () => {
    dispatch(getTemperaturesHistoricThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });

    dispatch(getHumidityHistoricThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });

    dispatch(getSoundHistoricThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });

    dispatch(getLuminosityHistoricThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });

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

  const getCurrentDate = () => {
    const today = new Date();
    const date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    const time = `${today.getHours()}h${today.getMinutes()}`;
    setDate(`${date} à ${time}`);
  };

  return (
    <StyledContainer>
      <Box height="15vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <MetricsIcon fontSize="large" />
          <Typography variant="h4">Workee</Typography>
        </Stack>
        <Typography variant="body1">Données relevées le {date}</Typography>
      </Box>

      <Grid container spacing={2} columns={12} py={4} alignItems="stretch">
        <Grid item sm={6}>
          <Temperature />
        </Grid>
        <Grid item sm={6}>
          <Humidity />
        </Grid>
        <Grid item sm={6}>
          <Sound />
        </Grid>
        <Grid item sm={6}>
          <Luminosity />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default EnvironmentMetricsScreen;
