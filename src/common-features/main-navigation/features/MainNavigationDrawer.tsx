import React from 'react';

import { Box } from '@ui-kit';

import { AccountUserMenu } from './AccountUserMenu';
import { LinksSmallDevices } from './links-item/LinksSmallDevices';
import { LogoItemSmallDevices } from './logo-item/LogoItemSmallDevices';

export const MainNavigationDrawer = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box onClick={handleDrawerToggle}>
      <LogoItemSmallDevices />
      <AccountUserMenu />
      <LinksSmallDevices />
    </Box>
  );
};
