import React from 'react';

import { Link } from 'react-router-dom';

import { Box } from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo.svg';

import { MainRoutesEnum } from '../../RoutesEnum';

export const SimpleHeader = () => (
  <Box display="flex" justifyContent="center" minHeight="10vh" width="100vw">
    <Link to={MainRoutesEnum.siteVitrine}>
      <Logo height="100%" width={180} />
    </Link>
  </Box>
);
