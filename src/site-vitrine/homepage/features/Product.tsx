import React from 'react';

import { Container, Stack, Typography, Button } from '@ui-kit';
import { ReactComponent as WorkeeConstruction } from '@ui-kit/images/home-workee-in-progress.svg';

export const Product = () => (
  <Container maxWidth="md">
    <Stack
      direction={{ xs: 'column-reverse', sm: 'row' }}
      alignItems="center"
      py={3}
      spacing={3}>
      <Stack
        direction="column"
        alignItems={{ xs: 'center', sm: 'flex-start' }}
        width={{ xs: '100%', sm: '50%' }}
        mt={{ xs: 3 }}>
        <Typography
          variant="h2"
          marginBottom="3.5rem"
          textAlign={{ xs: 'center', sm: 'left' }}>
          Un avant-goût de Workee ?
        </Typography>
        <Typography variant="body1">
          Nos équipes travaillent activement sur notre Workee 1.0.
        </Typography>
        <Typography variant="body1">
          Pour les plus impatients, les pré-commandes sont ouvertes !
        </Typography>
        <Button variant="contained" color="secondary">
          Pré-commandez le vôtre !
        </Button>
      </Stack>
      <Stack width={{ xs: '100%', sm: '50%' }}>
        <WorkeeConstruction width="100%" />
      </Stack>
    </Stack>
  </Container>
);
