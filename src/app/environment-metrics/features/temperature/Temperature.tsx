import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { selectTemperatureIsConform } from '@entities/environment-metrics/alert/store/selectors/selectTemperatureIsConform.selector';
import { selectCurrentTemperature } from '@entities/environment-metrics/temperature/current/store/selectors/selectCurrentTemperature.selector';
import { selectTemperatures } from '@entities/environment-metrics/temperature/store/selectors/selectTemperaturesHistoric.selector';
import {
  Box,
  Stack,
  Typography,
  Chip,
  Card,
  CardHeader,
  CardContent,
  WarningIcon,
  GoodIcon,
  Tooltip,
  styled,
} from '@ui-kit';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

const StyledCardContent = styled(CardContent)`
  height: 80%;
  display: flex;
  justify-content: center;
`;

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
  const temperaturesHistoric = useSelector(selectTemperatures);
  const temperatureValues = temperaturesHistoric.map(({ value }) => value).reverse();
  const temperatureTime = temperaturesHistoric
    .map(({ createdAt }) => createdAt)
    .reverse();

  const isConformValue = useSelector(selectTemperatureIsConform);

  const conformColor = '#24b57a';
  const notConformColor = '#cc2d22';

  const data = {
    labels: temperatureTime,
    datasets: [
      {
        label: '',
        data: temperatureValues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: isConformValue ? conformColor : notConformColor,
      },
    ],
  };

  const currentTemperature = useSelector(selectCurrentTemperature);
  const { value } = currentTemperature;
  const recommendedTemperature = `Recommandation : ${
    currentTemperature.alert.recommendedValue !== ''
      ? currentTemperature.alert.recommendedValue
      : '20°C - 23.5°C'
  }`;

  const receivedConformityMessage = currentTemperature.alert.recommendationMessage;
  const conformityMessageArray = receivedConformityMessage.split('.');
  const conformityMessage = conformityMessageArray.shift();
  const conformityAdvice = conformityMessageArray.toString();

  return (
    <Card>
      <CardHeader
        title={
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            justifyContent="space-between">
            <Typography variant="h5">Température</Typography>
            <Chip
              label={recommendedTemperature}
              variant="outlined"
              color="secondary"
            />
          </Stack>
        }
      />
      <StyledCardContent>
        {value !== undefined ? (
          <Stack
            direction="row"
            spacing={4}
            justifyContent="space-between"
            alignItems="center">
            <Box alignContent="center">
              <Line options={options} data={data} />
            </Box>
            <Stack alignSelf="center">
              <Typography
                variant={value !== undefined ? 'h1' : 'body1'}
                textAlign="center"
                color={isConformValue ? 'success.main' : 'error.main'}>
                {currentTemperature.value}°C
              </Typography>
              <Stack direction="row" alignItems="baseline" spacing={1} px={1}>
                {isConformValue ? (
                  <GoodIcon fontSize="large" />
                ) : (
                  <WarningIcon fontSize="large" />
                )}
                <Tooltip title={conformityAdvice} placement="bottom">
                  <Typography variant="body2" alignSelf="center" mx={2}>
                    {conformityMessage}
                  </Typography>
                </Tooltip>
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <Stack direction="row" spacing={4} justifyContent="center">
            <Typography variant="body1" textAlign="center" alignSelf="center">
              Pas de données récentes
            </Typography>
          </Stack>
        )}
      </StyledCardContent>
    </Card>
  );
};
