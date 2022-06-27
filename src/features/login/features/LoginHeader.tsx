import React from 'react';

import { Link } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import { Box } from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo.svg';

export const LoginHeader = () => (
  <Box
    sx={{ display: 'flex', justifyContent: 'center' }}
    minHeight="10vh"
    width="100vw">
    <Link to={RoutesEnum.home}>
      <Logo height="100%" width={180} />
    </Link>
  </Box>
);
