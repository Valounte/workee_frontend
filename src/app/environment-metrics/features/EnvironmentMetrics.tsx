// TODO : Renommer EnvironmentMetrics.screen.tsx

import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getHumidityHistoricThunk } from '@entities/environment-metrics/humidity/store/thunks/getHumidityHistoric.thunk';
import { getSoundHistoricThunk } from '@entities/environment-metrics/sound/store/thunks/getSoundHistoric.thunk';
import { selectCurrentTemperature } from '@entities/environment-metrics/temperature/current/store/selectors/selectCurrentTemperature.selector'; // TODO : les données auront la même heure de relevé
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
import { useAppDispatch } from 'src/store/useAppDispatch';

import { Humidity } from './humidity/Humidity';
import { Luminosity } from './luminosity/Luminosity';
import { Sound } from './sound/Sound';
import { Temperature } from './temperature/Temperature';

const StyledContainer = styled(Container)`
  margin: 0;
  background-color: #f3f3f3;
`;

const StyledGridContainer = styled(Grid)`
  margin-left: 0;
  padding: 0;
`;

// TODO : Renommer EnvironmentMetricsScreen
export const EnvironmentMetrics = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getTemperaturesHistoricThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });
  });

  useEffect(() => {
    dispatch(getHumidityHistoricThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });
  });

  useEffect(() => {
    dispatch(getSoundHistoricThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });
  });

  const lastDataFeedbackTime = useSelector(selectCurrentTemperature); // TODO : Sélectionner la véritable heure
  let formattedDataFeedbackDate;
  let dataFeedbackDate;
  let dataFeedbackTime;

  if (lastDataFeedbackTime.createdAt) {
    formattedDataFeedbackDate = lastDataFeedbackTime.createdAt.toString().split(' ');
    const [date, time] = formattedDataFeedbackDate;
    const [year, month, day] = date.split('-');
    dataFeedbackDate = [day, month, year].join('-');
    dataFeedbackTime = time;
  }

  return (
    <StyledContainer>
      <Box height="15vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <MetricsIcon fontSize="large" />
          <Typography variant="h4">Workee</Typography>
        </Stack>
        <Typography variant="body1">
          Données relevées le {dataFeedbackDate} à {dataFeedbackTime}
        </Typography>
      </Box>

      <StyledGridContainer
        container
        spacing={2}
        columns={12}
        py={4}
        alignItems="stretch">
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
      </StyledGridContainer>
    </StyledContainer>
  );
};
