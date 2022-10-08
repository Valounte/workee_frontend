import React from 'react';

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
import { selectCurrentLuminosity } from '@entities/environment-metrics/luminosity/store/selectors/selectCurrentLuminosity.selector';
import { getCurrentLuminosityThunk } from '@entities/environment-metrics/luminosity/store/thunks/getCurrentLuminosity.thunk';
import {
  Box,
  Stack,
  Typography,
  Chip,
  LuminosityIcon,
  Card,
  CardContent,
  CardActions,
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

export const Luminosity = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  const currentLuminosity = useSelector(selectCurrentLuminosity);
  console.log(currentLuminosity);

  useAsync(() => dispatch(getCurrentLuminosityThunk({ token })));

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Stack direction="row" alignItems="center" spacing={1} width="50%">
            <LuminosityIcon fontSize="large" />
            <Typography variant="h5">Luminosité</Typography>
          </Stack>
          <Chip label="Recommandation : (alert.recommendedTemperature)" />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box alignContent="center" width="50%">
            <Line options={options} data={data} />
          </Box>
          <Box alignSelf="center" width="50%">
            <Typography variant="h1" textAlign="center">
              (value)lx
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Typography variant="body2" alignSelf="center" mx={2}>
          (alert.recommendationMessage)
        </Typography>
      </CardActions>
    </Card>
  );
};
