import React from 'react';

import { useSelector } from 'react-redux';

import { selectHumidity } from '@entities/metrics/store/selectors/getHumidity.selector';
import { styled, Container, Grid, Box, Stack, Card, Typography, Chip, MetricsIcon, ThermometerIcon, HumidityIcon, VolumeIcon, LuminosityIcon } from '@ui-kit';

const StyledContainer = styled(Container)`
  margin: 0;
  background-color: #f3f3f3;
`;

const StyledGridContainer = styled(Grid)`
  margin-left: 0;
  padding: 0;
  height: 100%;
`;

const StyledGridItem = styled(Grid)`
  padding-left: 0;
`;

const StyledCard = styled(Card)`
  height: 100%;
  display: grid;
  grid-template: 
    "title alert" 1fr
    "chart data" 1fr
    "message message" 1fr;
`;

const StyledChip = styled(Chip)`
  place-self: center;
`;

export const EnvironmentMetrics = () => {
  const humidity = useSelector(selectHumidity);
  console.log(humidity)

  return (
    <StyledContainer>
      <Box height="15vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <MetricsIcon fontSize="large"/>
          <Typography variant='h4'>Workee</Typography>
        </Stack>
        <Typography variant='body1'>Données relevées le 30 août 2022 à 12:36</Typography>
      </Box>
      <StyledGridContainer container spacing={2} py={4} alignItems="stretch">
        <StyledGridItem item sm={6}>
          <StyledCard>
            <Stack direction="row" alignItems="center" spacing={1} mx={2}>
              <ThermometerIcon fontSize="large"/>
              <Typography variant='h5'>Température</Typography>
            </Stack>
            <StyledChip label="Recommandation : 40% - 60%"/>
            <Box alignSelf="center" mx={2}>Graphique</Box>
            <Typography variant="h1" textAlign="center" alignSelf="center" mx={2}>35°C</Typography>
            <Typography variant="body2" alignSelf="center" mx={2}>La température est élevée</Typography>
          </StyledCard>
        </StyledGridItem>
        <StyledGridItem item sm={6}>
          <StyledCard>
            <Stack direction="row" alignItems="center" spacing={1} mx={2}>
              <HumidityIcon fontSize="large"/>
              <Typography variant='h5'>Humidité</Typography>
            </Stack>
            <StyledChip label="Recommandation : 40% - 60%"/>
            <Box alignSelf="center" mx={2}>Graphique</Box>
            <Typography variant="h1" textAlign="center" alignSelf="center" mx={2}>70%</Typography>
            <Typography variant="body2" alignSelf="center" mx={2}>Le taux d&lsquo;humidité est élevée</Typography>
          </StyledCard>
        </StyledGridItem>
        <StyledGridItem item sm={6}>
          <StyledCard>
              <Stack direction="row" alignItems="center" spacing={1} mx={2}>
                <VolumeIcon fontSize="large"/>
                <Typography variant='h5'>Volume sonore</Typography>
              </Stack>
              <StyledChip label="Recommandation : 40% - 60%" />
              <Box alignSelf="center" mx={2}>Graphique</Box>
              <Typography variant="h1" textAlign="center" alignSelf="center" mx={2}>50 dB</Typography>
              <Typography variant="body2" alignSelf="center" mx={2}>Le volume sonore est ok</Typography>
          </StyledCard>
        </StyledGridItem>
        <StyledGridItem item sm={6}>
          <StyledCard>
              <Stack direction="row" alignItems="center" spacing={1} mx={2}>
                <LuminosityIcon fontSize="large"/>
                <Typography variant='h5'>Luminosité</Typography>
              </Stack>
              <StyledChip label="Recommandation : 40% - 60%" />
              <Box alignSelf="center" mx={2}>Graphique</Box>
              <Typography variant="h1" textAlign="center" alignSelf="center" mx={2}>300 lx</Typography>
              <Typography variant="body2" alignSelf="center" mx={2}>La luminosité est ok</Typography>
          </StyledCard>
        </StyledGridItem>
      </StyledGridContainer>
    </StyledContainer>
  );
}
