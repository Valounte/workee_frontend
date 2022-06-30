import React from 'react';

import { Box, Stack, Typography } from '@ui-kit';

export const BrandStatistics = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '30vh',
      backgroundColor: 'secondary.light',
    }}>
    <Stack direction="row">
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '5vw',
          height: '5vh',
        }}>
        Image
      </Box>
      <Stack direction="column" ml={1}>
        <Typography>124 521</Typography>
        <Typography>Workees dans la nature</Typography>
      </Stack>
    </Stack>
    <Stack direction="row">
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '5vw',
          height: '5vh',
        }}>
        Image
      </Box>
      <Stack direction="column" ml={1}>
        <Typography>347</Typography>
        <Typography>Entreprises partenaires</Typography>
      </Stack>
    </Stack>
    <Stack direction="row" spacing={1}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '5vw',
          height: '5vh',
        }}>
        Image
      </Box>
      <Stack direction="column" ml={1}>
        <Typography>213 067</Typography>
        <Typography>équipes créées</Typography>
      </Stack>
    </Stack>
  </Box>
);
