import React from 'react';

import { Link } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import {
  AppBar,
  Container,
  Box,
  Stack,
  Menu,
  MenuItem,
  Typography,
  Button,
  IconButton,
  MenuIcon,
} from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo.svg';

const links = ['Invitation Utilisateurs', 'Link2', 'Link3'];

export const MainHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Stack order={{ xs: '2', sm: '1' }} flexGrow={{ xs: 1, sm: 0 }}>
            <Link to={RoutesEnum.home}>
              <Logo height="100%" width={180} />
            </Link>
          </Stack>
          <Box flexGrow="1" display={{ xs: 'flex', sm: 'none' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}>
              {links.map(link => (
                <MenuItem key={link} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{link}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            display={{ xs: 'none', sm: 'flex' }}
            order={{ sm: '2' }}>
            <Link to="/usersHandler">
              <Typography textAlign="center">
                {links[0]}
              </Typography>
            </Link>
          </Stack>
          <Stack order={{ xs: '3', sm: '2' }}>
            <Button href={RoutesEnum.login} variant="outlined" color="secondary">
              Connexion
            </Button>
          </Stack>
        </Box>
      </Container>
    </AppBar>
  );
};
