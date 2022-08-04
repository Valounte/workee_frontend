import React from 'react';

import { Box, Container, Stack, Typography } from '@ui-kit';
import { ReactComponent as CompaniesImage } from '@ui-kit/images/home-icon-building.svg';
import { ReactComponent as TeamsImage } from '@ui-kit/images/home-icon-people.svg';
import { ReactComponent as WorkeeImage } from '@ui-kit/images/workee-icon.svg';

export const BrandStatistics = () => (
  <Container maxWidth="md">
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      my={3}
      justifyContent="space-between"
      alignItems="center">
      <Stack direction="row" alignItems="center">
        <Box>
          <WorkeeImage width="70%" display="block" />
        </Box>
        <Stack direction="column">
          <Typography variant="h3">124 521</Typography>
          <Typography variant="body1">Workees dans la nature</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box>
          <CompaniesImage width="70%" />
        </Box>
        <Stack direction="column">
          <Typography variant="h3">347</Typography>
          <Typography variant="body1">Entreprises partenaires</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box>
          <TeamsImage width="70%" />
        </Box>
        <Stack direction="column">
          <Typography variant="h3">213 067</Typography>
          <Typography variant="body1">Equipes managées</Typography>
        </Stack>
      </Stack>
    </Stack>
  </Container>
);
