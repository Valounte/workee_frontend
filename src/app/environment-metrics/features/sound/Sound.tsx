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

import { selectSoundIsConform } from '@entities/environment-metrics/alert/store/selectors/selectSoundIsConform.selector';
import { selectCurrentSound } from '@entities/environment-metrics/sound/current/store/selectors/selectCurrentSound.selector';
import { selectSound } from '@entities/environment-metrics/sound/store/selectors/selectSoundHistoric.selector';
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

export const Sound = () => {
  const soundHistoric = useSelector(selectSound);
  const soundValues = soundHistoric.map(({ value }) => value).reverse();
  const soundTime = soundHistoric.map(({ createdAt }) => createdAt).reverse();

  const isConformValue = useSelector(selectSoundIsConform);

  const conformColor = '#24b57a';
  const notConformColor = '#cc2d22';

  const data = {
    labels: soundTime,
    datasets: [
      {
        label: '',
        data: soundValues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: isConformValue ? conformColor : notConformColor,
      },
    ],
  };

  const currentSound = useSelector(selectCurrentSound);
  const { value } = currentSound;
  const recommendedSound = `Recommandation : ${
    currentSound.alert.recommendedValue !== ''
      ? currentSound.alert.recommendedValue
      : ' < 80dB'
  }`;

  const receivedConformityMessage = currentSound.alert.recommendationMessage;
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
            <Typography variant="h5">Son ambiant</Typography>
            <Chip label={recommendedSound} variant="outlined" color="secondary" />
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
                {currentSound.value}dB
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
