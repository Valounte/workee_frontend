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

import { selectLuminosityIsConform } from '@entities/environment-metrics/alert/store/selectors/selectLuminosityIsConform.selector';
import { selectCurrentLuminosity } from '@entities/environment-metrics/luminosity/current/store/selectors/selectCurrentLuminosity.selector';
import { selectLuminosity } from '@entities/environment-metrics/luminosity/store/selectors/selectLuminosityHistoric.selector';
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

export const Luminosity = () => {
  const luminosityHistoric = useSelector(selectLuminosity);
  const luminosityValues = luminosityHistoric.map(({ value }) => value).reverse();
  const luminosityTime = luminosityHistoric
    .map(({ createdAt }) => createdAt)
    .reverse();

  const isConformValue = useSelector(selectLuminosityIsConform);

  const conformColor = '#24b57a';
  const notConformColor = '#cc2d22';

  const data = {
    labels: luminosityTime,
    datasets: [
      {
        label: '',
        data: luminosityValues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: isConformValue ? conformColor : notConformColor,
      },
    ],
  };

  const currentLuminosity = useSelector(selectCurrentLuminosity);
  const { value } = currentLuminosity;
  const recommendedLuminosity = `Recommandation : ${
    currentLuminosity.alert.recommendedValue !== ''
      ? currentLuminosity.alert.recommendedValue
      : '200lx - 500lx'
  }`;

  const receivedConformityMessage = currentLuminosity.alert.recommendationMessage;
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
            <Typography variant="h5">Luminosité</Typography>
            <Chip
              label={recommendedLuminosity}
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
                {currentLuminosity.value}lx
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
