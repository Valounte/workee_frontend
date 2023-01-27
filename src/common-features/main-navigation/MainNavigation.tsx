import React from 'react';

import { useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectMe } from '@entities/authentification/store/selectors/selectMe.selector';
import {
  Stack,
  List,
  ListItem,
  ListItemIcon,
  styled,
  LinearProgress,
  IconButton,
  MenuIcon,
  Typography,
  Drawer,
} from '@ui-kit';

import { AccountUserMenu } from './features/AccountUserMenu';
import { LinksDesktop } from './features/links-item/LinksDesktop';
import { LogoItemDesktop } from './features/logo-item/LogoItemDesktop';
import { MainNavigationDrawer } from './features/MainNavigationDrawer';

const StyledStack = styled(Stack)`
  @media (max-width: 1023px) {
    border-right: 0;
    border-bottom: '1px solid lightgrey';
  }
`;

const StyledList = styled(List)`
  display: flex;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 1023px) {
    width: 100%;
    border-bottom: 1px solid lightgrey;
  }
`;

export const MainNavigation = () => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const me = useSelector(selectMe);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  if (!me) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <StyledStack
      height={{ xs: '8vh', md: '100vh' }}
      direction={{ xs: 'row', md: 'column' }}
      justifyContent={{ xs: 'space-between', md: 'flex-start' }}
      borderRight="1px solid lightgrey">
      {!onlySmallScreen ? (
        <StyledList>
          <LogoItemDesktop />
          <AccountUserMenu />
          <LinksDesktop />
        </StyledList>
      ) : (
        <>
          <StyledList>
            <ListItem>
              <ListItemIcon>
                <Stack direction="row" alignItems="center" spacing={1} mr={2}>
                  <IconButton onClick={handleDrawerToggle}>
                    <MenuIcon aria-label="Menu" fontSize="large" />
                  </IconButton>
                  <Typography>Menu</Typography>
                </Stack>
              </ListItemIcon>
            </ListItem>
          </StyledList>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            <MainNavigationDrawer />
          </Drawer>
        </>
      )}
    </StyledStack>
  );
};
