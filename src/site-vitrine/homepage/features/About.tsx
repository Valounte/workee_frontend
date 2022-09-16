import React from 'react';

import { Container, Box, Stack, Typography } from '@ui-kit';
import { ReactComponent as WorkeeFriendImage } from '@ui-kit/images/home-workee-friendly.svg';

export const About = () => (
  <Box bgcolor="#faeadd">
    <Container maxWidth="md">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        py={3}
        spacing={3}>
        <Stack width={{ xs: '100%', sm: '50%' }} alignItems={{ xs: 'center' }}>
          <WorkeeFriendImage width="80%" />
        </Stack>
        <Stack
          direction="column"
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          width={{ xs: '100%', sm: '50%' }}
          mt={{ xs: 3 }}>
          <Typography variant="h3" marginBottom="3.5rem">
            Workee, un ami robotique à votre service
          </Typography>
          <Typography variant="body1">
            Besoin d&apos;une pause ? D&apos;hydratation ?{' '}
          </Typography>
          <Typography variant="body1">
            Workee vous accompagne lors de vos journées de télétravail et prend soin
            de vous.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
