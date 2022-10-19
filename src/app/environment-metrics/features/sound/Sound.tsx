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
import { selectCurrentSound } from '@entities/environment-metrics/sound/current/store/selectors/selectCurrentSound.selector';
import { getCurrentSoundThunk } from '@entities/environment-metrics/sound/current/store/thunks/getCurrentSound.thunk';
import { selectSound } from '@entities/environment-metrics/sound/store/selectors/selectSoundHistoric.selector';
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
  SoundIcon,
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

export const Sound = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  const soundHistoric = useSelector(selectSound);
  const soundValues = soundHistoric.map(({ value }) => value).reverse();
  const soundTime = soundHistoric.map(({ createdAt }) => createdAt).reverse();

  const data = {
    labels: soundTime,
    datasets: [
      {
        label: '',
        data: soundValues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgb(255,127,39)',
      },
    ],
  };

  const currentSound = useSelector(selectCurrentSound);
  const isConformValue = useSelector(selectIsConform);
  const { value } = currentSound;
  const recommendedSound = `Recommandation : ${currentSound.alert.recommendedValue}`;

  useAsync(() => dispatch(getCurrentSoundThunk({ token })));

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Stack direction="row" alignItems="center" spacing={1} width="50%">
            <SoundIcon fontSize="large" />
            <Typography variant="h5">Son ambiant</Typography>
          </Stack>
          <Chip label={recommendedSound} />
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
              {value}dB
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
            {currentSound.alert.recommendationMessage}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};
