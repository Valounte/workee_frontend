// TODO : Renommer EnvironmentMetrics.screen.tsx

import React from 'react';

import {
  styled,
  Container,
  Grid,
  Box,
  Stack,
  Typography,
  MetricsIcon,
} from '@ui-kit';

import { Humidity } from './humidity/Humidity';
import { Luminosity } from './luminosity/Luminosity';
import { Sound } from './sound/Sound';
import { Temperature } from './temperature/Temperature';

const StyledContainer = styled(Container)`
  margin: 0;
  background-color: #f3f3f3;
`;

const StyledGridContainer = styled(Grid)`
  margin-left: 0;
  padding: 0;
`;

// TODO : Renommer EnvironmentMetricsScreen
export const EnvironmentMetrics = () => (
  <StyledContainer>
    <Box height="15vh" p={2}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <MetricsIcon fontSize="large" />
        <Typography variant="h4">Workee</Typography>
      </Stack>
      <Typography variant="body1">
        Données relevées le (recommendedTemperature)
      </Typography>
    </Box>

    <StyledGridContainer
      container
      spacing={2}
      columns={12}
      py={4}
      alignItems="stretch">
      <Grid item sm={6}>
        <Temperature />
      </Grid>
      <Grid item sm={6}>
        <Humidity />
      </Grid>
      <Grid item sm={6}>
        <Sound />
      </Grid>
      <Grid item sm={6}>
        <Luminosity />
      </Grid>
    </StyledGridContainer>
  </StyledContainer>
);
