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
import { selectCurrentHumidity } from '@entities/environment-metrics/humidity/current/store/selectors/selectCurrentHumidityselector';
import { getCurrentHumidityThunk } from '@entities/environment-metrics/humidity/current/store/thunks/getCurrentHumidity.thunk';
import { selectHumidity } from '@entities/environment-metrics/humidity/store/selectors/selectHumidityHistoric.selector';
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
  HumidityIcon,
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

export const Humidity = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  const humidityHistoric = useSelector(selectHumidity);
  const humidityValues = humidityHistoric.map(({ value }) => value).reverse();
  const humidityTime = humidityHistoric.map(({ createdAt }) => createdAt).reverse();

  const data = {
    labels: humidityTime,
    datasets: [
      {
        label: '',
        data: humidityValues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgb(255,127,39)',
      },
    ],
  };

  const currentHumidity = useSelector(selectCurrentHumidity);
  const isConformValue = useSelector(selectIsConform);
  const { value } = currentHumidity;
  const recommendedHumidity = `Recommandation : ${currentHumidity.alert.recommendedValue}`;

  useAsync(() => dispatch(getCurrentHumidityThunk({ token })));

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Stack direction="row" alignItems="center" spacing={1} width="50%">
            <HumidityIcon fontSize="large" />
            <Typography variant="h5">Humidité</Typography>
          </Stack>
          <Chip label={recommendedHumidity} />
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
              {value}%
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
            {currentHumidity.alert.recommendationMessage}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};
