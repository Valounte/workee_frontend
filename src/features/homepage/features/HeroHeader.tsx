import React from 'react';

import { Box, Stack, Typography, Button } from '@ui-kit';
import { ReactComponent as HeroImage } from '@ui-kit/images/home-main-illustration.svg';

export const HeroHeader = () => (
  <Box
    height="65vh"
    display="flex"
    justifyContent="space-between"
    alignItems="center">
    <Stack direction="column" sx={{ width: '50vw', alignItems: 'flex-start' }}>
      <Typography variant="h1">Workee</Typography>
      <Typography variant="h1">se reconnecter</Typography>
      <Typography variant="h1">à l&apos; essentiel</Typography>
      <Button variant="contained" color="secondary" size="small">
        En voir plus
      </Button>
    </Stack>
    <HeroImage width="60%" />
  </Box>
);
