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
import { selectIsConform } from '@entities/environment-metrics/alert/store/selectors/selectIsConform.selector';
import { selectCurrentLuminosity } from '@entities/environment-metrics/luminosity/current/store/selectors/selectCurrentLuminosity.selector';
import { getCurrentLuminosityThunk } from '@entities/environment-metrics/luminosity/current/store/thunks/getCurrentLuminosity.thunk';
import { selectLuminosity } from '@entities/environment-metrics/luminosity/store/selectors/selectLuminosityHistoric.selector';
import {
  Box,
  Stack,
  Typography,
  Chip,
  Card,
  CardContent,
  CardActions,
  WarningIcon,
  Divider,
  GoodIcon,
  LuminosityIcon,
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

  const luminosityHistoric = useSelector(selectLuminosity);
  const luminosityValues = luminosityHistoric.map(({ value }) => value).reverse();
  const luminosityTime = luminosityHistoric
    .map(({ createdAt }) => createdAt)
    .reverse();

  const data = {
    labels: luminosityTime,
    datasets: [
      {
        label: '',
        data: luminosityValues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgb(255,127,39)',
      },
    ],
  };

  const currentLuminosity = useSelector(selectCurrentLuminosity);
  const isConformValue = useSelector(selectIsConform);
  const { value } = currentLuminosity;
  const recommendedLuminosity = `Recommandation : ${currentLuminosity.alert.recommendedValue}`;

  useAsync(() => dispatch(getCurrentLuminosityThunk({ token })));

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Stack direction="row" alignItems="center" spacing={1} width="50%">
            <LuminosityIcon fontSize="large" />
            <Typography variant="h5">Luminosité</Typography>
          </Stack>
          <Chip label={recommendedLuminosity} />
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
              {value}lx
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
            {currentLuminosity.alert.recommendationMessage}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};
