import React from 'react';

import { Grid, Typography } from '@ui-kit';

export const EnvironmentMetrics = () => (
  <Grid container spacing={2}>
    <Grid item sm={6}>
      <Typography>Température</Typography>
    </Grid>
    <Grid item sm={6}>
      <Typography>Humidité</Typography>
    </Grid>
    <Grid item sm={6}>
      <Typography>Volume sonore</Typography>
    </Grid>
    <Grid item sm={6}>
      <Typography>xs=8</Typography>
    </Grid>
  </Grid>
);
