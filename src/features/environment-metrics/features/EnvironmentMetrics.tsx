import React from 'react';

import { useSelector } from 'react-redux';

import { selectHumidity } from '@entities/metrics/store/selectors/getHumidity.selector';
import { styled, Grid, Card, CardHeader, CardContent, Typography } from '@ui-kit';

const StyledGridContainer = styled(Grid)`
  background: #f3f3f3;
  margin-left: 0;
`;

const StyledGridItem = styled(Grid)`
  padding-left: 0;
`;

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EnvironmentMetrics = () => {
  const humidity = useSelector(selectHumidity);
  console.log(humidity)

  return (
  <StyledGridContainer container spacing={2} pr={2} py={4} alignItems="stretch">
    <StyledGridItem item sm={12}>
      <Typography variant='h2'>Données actuelles</Typography>
      <Typography variant='body1'>Données relevées le 30 août 2022 à 12:36</Typography>
    </StyledGridItem>
    <StyledGridItem item sm={6}>
      <StyledCard>
        <CardHeader
          title="Température actuelle"
          subheader="Recommandation : 40% - 60%"
        />
        <CardContent>
          <Typography variant="h1" textAlign="center">35°C</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">La température est élevée</Typography>
        </CardContent>
      </StyledCard>
    </StyledGridItem>
    <StyledGridItem item sm={6}>
    <StyledCard>
        <CardHeader
          title="Humidité actuelle"
          subheader="Recommandation : 40% - 60%"
        />
        <CardContent>
          <Typography variant="h1" textAlign="center">70%</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">L&lsquo;air est sec</Typography>
        </CardContent>
      </StyledCard>
    </StyledGridItem>
    <StyledGridItem item sm={12}>
      <StyledCard>
        <CardHeader
          title="Volume sonore actuel"
          subheader="Recommandation 40% - 60%"
        />
        <CardContent>
          <Typography variant="h1" textAlign="center">50 dB</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">Le volume sonore est ok</Typography>
        </CardContent>
      </StyledCard>
    </StyledGridItem>
  </StyledGridContainer>
  );
}
