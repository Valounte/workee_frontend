import React from 'react';

import {
  Container,
  Box,
  Stack,
  Typography,
  IconButton,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
} from '@ui-kit';

export const Footer = () => (
  <Container maxWidth="lg">
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderTop="1px solid lightgrey"
      py="1">
      <Typography>Copyright © 2022 Workee</Typography>
      <Stack direction="row" spacing={1}>
        <IconButton disableRipple>
          <InstagramIcon fontSize="large" />
        </IconButton>
        <IconButton disableRipple>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton disableRipple>
          <FacebookIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  </Container>
);
