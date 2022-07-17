import React from 'react';

import { Link } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import { AppBar, Container, Box, Stack, Typography, Button } from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo.svg';

export const MainHeader = () => (
  <AppBar position="sticky">
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link to={RoutesEnum.home}>
          <Logo height="100%" width={180} />
        </Link>
        <Stack direction="row" spacing={2}>
          <Typography variant="body1">Link 1</Typography>
          <Typography variant="body1">Link 2</Typography>
          <Typography variant="body1">Link 3</Typography>
        </Stack>
        <Button href={RoutesEnum.login} variant="contained" color="secondary">
          Connexion
        </Button>
      </Box>
    </Container>
  </AppBar>
);
