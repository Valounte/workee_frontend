import React from 'react';

import { Box, Container, Stack, Typography, Button } from '@ui-kit';
import { ReactComponent as HeroImage } from '@ui-kit/images/home-main-illustration.svg';

export const HeroHeader = () => (
  <Box bgcolor="#FDFBFB" height="70vh">
    <Container maxWidth="md">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Stack direction="column" width="50%" alignItems="flex-start">
          <Typography variant="h1">Workee</Typography>
          <Typography variant="h2">se reconnecter</Typography>
          <Typography variant="h2">à l&apos;essentiel</Typography>
          <Button variant="contained" color="secondary" size="small">
            En voir plus
          </Button>
        </Stack>
        <HeroImage width="50%" />
      </Box>
    </Container>
  </Box>
);
