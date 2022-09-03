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

import { selectHumidity } from '@entities/metrics/store/selectors/getHumidity.selector';
import {
  styled,
  Container,
  Grid,
  Box,
  Stack,
  Typography,
  Chip,
  MetricsIcon,
  ThermometerIcon,
  Card,
} from '@ui-kit';

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

const StyledContainer = styled(Container)`
  margin: 0;
  background-color: #f3f3f3;
`;

const StyledGridContainer = styled(Grid)`
  margin-left: 0;
  padding: 0;
  // height: 100%;
`;

const StyledCardContent = styled(Grid)``;

export const EnvironmentMetrics = () => {
  const humidity = useSelector(selectHumidity);
  console.log(humidity);

  return (
    <StyledContainer>
      <Box height="15vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <MetricsIcon fontSize="large" />
          <Typography variant="h4">Workee</Typography>
        </Stack>
        <Typography variant="body1">
          Données relevées le 30 août 2022 à 12:36
        </Typography>
      </Box>

      <StyledGridContainer
        container
        spacing={2}
        columns={12}
        py={4}
        alignItems="stretch">
        <Grid item sm={6}>
          <Card>
            <StyledCardContent container spacing={2}>
              <Grid item sm={6}>
                <Stack direction="row" alignItems="center" spacing={1} mx={2}>
                  <ThermometerIcon fontSize="large" />
                  <Typography variant="h5">Température</Typography>
                </Stack>
              </Grid>
              <Grid item sm={6}>
                <Chip label="Recommandation : 40% - 60%" />
              </Grid>
              <Grid item sm={4}>
                <Box alignContent="center">
                  <Line options={options} data={data} />
                </Box>
              </Grid>
              <Grid item sm={8}>
                <Typography
                  variant="h1"
                  textAlign="center"
                  alignSelf="center"
                  mx={2}>
                  35°C
                </Typography>
              </Grid>
              <Grid item sm={12}>
                <Typography variant="body2" alignSelf="center" mx={2}>
                  La température est élevée
                </Typography>
              </Grid>
              {/* </Grid> */}
            </StyledCardContent>
          </Card>
        </Grid>
        {/* <StyledGridItem item sm={6}>
          <Card>
            <Stack direction="row" alignItems="center" spacing={1} mx={2}>
              <ThermometerIcon fontSize="large"/>
              <Typography variant='h5'>Température</Typography>
            </Stack>
            <StyledChip label="Recommandation : 40% - 60%"/>
            <Box alignSelf="center" mx={2}>
              <Line options={options} data={data} />
            </Box>
            <Typography variant="h1" textAlign="center" alignSelf="center" mx={2}>35°C</Typography>
            <Typography variant="body2" alignSelf="center" mx={2}>La température est élevée</Typography>
          </Card>
        </StyledGridItem> */}

        {/* <StyledGridItem item sm={6}>
          <Card>
            <Stack direction="row" alignItems="center" spacing={1} mx={2}>
              <HumidityIcon fontSize="large"/>
              <Typography variant='h5'>Humidité</Typography>
            </Stack>
            <StyledChip label="Recommandation : 40% - 60%"/>
            <Box alignSelf="center" mx={2}>Graphique</Box>
            <Typography variant="h1" textAlign="center" alignSelf="center" mx={2}>70%</Typography>
            <Typography variant="body2" alignSelf="center" mx={2}>Le taux d&lsquo;humidité est élevée</Typography>
          </Card>
        </StyledGridItem>
        <StyledGridItem item sm={6}>
          <Card>
              <Stack direction="row" alignItems="center" spacing={1} mx={2}>
                <VolumeIcon fontSize="large"/>
                <Typography variant='h5'>Volume sonore</Typography>
              </Stack>
              <StyledChip label="Recommandation : 40% - 60%" />
              <Box alignSelf="center" mx={2}>Graphique</Box>
              <Typography variant="h1" textAlign="center" alignSelf="center" mx={2}>50 dB</Typography>
              <Typography variant="body2" alignSelf="center" mx={2}>Le volume sonore est ok</Typography>
          </Card>
        </StyledGridItem>
        <StyledGridItem item sm={6}>
          <Card>
              <Stack direction="row" alignItems="center" spacing={1} mx={2}>
                <LuminosityIcon fontSize="large"/>
                <Typography variant='h5'>Luminosité</Typography>
              </Stack>
              <StyledChip label="Recommandation : 40% - 60%" />
              <Box alignSelf="center" mx={2}>Graphique</Box>
              <Typography variant="h1" textAlign="center" alignSelf="center" mx={2}>300 lx</Typography>
              <Typography variant="body2" alignSelf="center" mx={2}>La luminosité est ok</Typography>
          </Card>
        </StyledGridItem> */}
      </StyledGridContainer>
    </StyledContainer>
  );
};
