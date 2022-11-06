import React from 'react';

import { ListItem } from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo.svg';

export const LogoItemSmallDevices = () => (
  <ListItem divider>
    <Logo width={100} height={40} />
  </ListItem>
);
