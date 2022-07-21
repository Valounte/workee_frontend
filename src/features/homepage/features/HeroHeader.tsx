import React from 'react';

import { Box, Container, Stack, Typography, Button } from '@ui-kit';
import { ReactComponent as HeroImage } from '@ui-kit/images/home-main-illustration.svg';

export const HeroHeader = () => (
  <Box bgcolor="#FDFBFB">
    <Container maxWidth="md">
      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center">
        <Stack
          direction="column"
          alignItems="flex-start"
          width={{ xs: '100%', sm: '50%' }}
          mt={{ xs: 4, sm: 0 }}>
          <Typography variant="h1">Workee</Typography>
          <Typography variant="h2">se reconnecter à l&apos;essentiel</Typography>
          <Button variant="contained" color="secondary" size="small">
            En voir plus
          </Button>
        </Stack>
        <Stack width={{ xs: '100%', sm: '50%' }}>
          <HeroImage width="100%" />
        </Stack>
      </Stack>
    </Container>
  </Box>
);
