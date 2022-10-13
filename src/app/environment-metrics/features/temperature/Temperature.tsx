import React from 'react';

// import { unwrapResult } from '@reduxjs/toolkit';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { selectIsConform } from '@entities/environment-metrics/alert/store/selectors/selectIsConform.selector';
import { selectTemperatureAlert } from '@entities/environment-metrics/alert/store/selectors/selectTemperatureAlert.selector';
import { selectCurrentTemperature } from '@entities/environment-metrics/temperature/store/selectors/selectCurrentTemperature.selector';
import { getCurrentTemperatureThunk } from '@entities/environment-metrics/temperature/store/thunks/getCurrentTemperature.thunk';
import {
  Box,
  Stack,
  Typography,
  Chip,
  ThermometerIcon,
  Card,
  CardContent,
  CardActions,
  WarningIcon,
  Divider,
  GoodIcon,
} from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['10:36', '11:36', '12:36', '13:36', '14:36'],
  datasets: [
    {
      label: '',
      data: [23.3, 23.5, 23.7, 23.9, 23.5],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgb(255,127,39)',
    },
  ],
};

export const options = {
  responsive: true,
  lineTension: 0.4,
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

export const Temperature = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  const currentTemperature = useSelector(selectCurrentTemperature);
  const isConformValue = useSelector(selectIsConform);
  const alert = useSelector(selectTemperatureAlert);

  useAsync(() => dispatch(getCurrentTemperatureThunk({ token })));

  const { recommendationMessage, recommendedTemperature } = alert;
  const { value } = currentTemperature;

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Stack direction="row" alignItems="center" spacing={1} width="50%">
            <ThermometerIcon fontSize="large" />
            <Typography variant="h5">Température</Typography>
          </Stack>
          <Chip label={recommendedTemperature} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box alignContent="center" width="50%">
            <Line options={options} data={data} />
          </Box>
          <Box alignSelf="center" width="50%">
            <Typography
              variant="h1"
              textAlign="center"
              color={isConformValue ? 'success.main' : 'warning.main'}>
              {value}°C
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Stack direction="row" alignItems="center" spacing={1} px={1}>
          {isConformValue ? (
            <GoodIcon fontSize="large" />
          ) : (
            <WarningIcon fontSize="large" />
          )}
          <Typography variant="body2" alignSelf="center" mx={2}>
            {recommendationMessage}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};
