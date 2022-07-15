import React from 'react';

import { Box, Stack, Typography } from '@ui-kit';
import { ReactComponent as CompaniesImage } from '@ui-kit/images/home-icon-building.svg';
import { ReactComponent as TeamsImage } from '@ui-kit/images/home-icon-people.svg';
import { ReactComponent as WorkeeImage } from '@ui-kit/images/workee-icon.svg';

export const BrandStatistics = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    height="30vh">
    <Stack direction="row">
      <Box>
        <WorkeeImage width="90%" />
      </Box>
      <Stack direction="column" ml={1}>
        <Typography>124 521</Typography>
        <Typography>Workees dans la nature</Typography>
      </Stack>
    </Stack>
    <Stack direction="row">
      <Box>
        <CompaniesImage width="90%" />
      </Box>
      <Stack direction="column" ml={1}>
        <Typography>347</Typography>
        <Typography>Entreprises partenaires</Typography>
      </Stack>
    </Stack>
    <Stack direction="row" spacing={1}>
      <Box>
        <TeamsImage width="90%" />
      </Box>
      <Stack direction="column" ml={1}>
        <Typography>213 067</Typography>
        <Typography>équipes créées</Typography>
      </Stack>
    </Stack>
  </Box>
);
