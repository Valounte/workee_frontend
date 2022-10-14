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
// import { selectTemperatureAlert } from '@entities/environment-metrics/alert/store/selectors/selectTemperatureAlert.selector';
// import { selectCurrentTemperature } from '@entities/environment-metrics/temperature/current/store/selectors/selectCurrentTemperature.selector';
import { selectTemperatures } from '@entities/environment-metrics/temperature/store/selectors/selectTemperaturesHistoric.selector';
import { getTemperaturesHistoricThunk } from '@entities/environment-metrics/temperature/store/thunks/getTemperaturesHistoric.thunk';
import {
  Box,
  Stack,
  Typography,
  // Chip,
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

  const temperaturesHistoric = useSelector(selectTemperatures);
  const temperatureValues = temperaturesHistoric.map(({ value }) => value).reverse();
  const temperatureTime = temperaturesHistoric
    .map(({ createdAt }) => createdAt)
    .reverse();

  const data = {
    labels: temperatureTime,
    datasets: [
      {
        label: '',
        data: temperatureValues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgb(255,127,39)',
      },
    ],
  };

  // const currentTemperature = useSelector(selectCurrentTemperature);
  // console.log(currentTemperature);

  const isConformValue = useSelector(selectIsConform);
  // const temperatureAlert = useSelector(selectTemperatureAlert);

  // const { recommendationMessage, recommendedTemperature } = temperatureAlert;
  // const { value } = currentTemperature;

  useAsync(() => dispatch(getTemperaturesHistoricThunk({ token })));

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Stack direction="row" alignItems="center" spacing={1} width="50%">
            <ThermometerIcon fontSize="large" />
            <Typography variant="h5">Température</Typography>
          </Stack>
          {/* <Chip label={recommendedTemperature} /> */}
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
              {/* {value}°C */}
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
            {/* {recommendationMessage} */}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};
