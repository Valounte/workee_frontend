import React, { useCallback } from 'react';

import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectIsAuthentificated } from '@entities/authentification/store/selectors/selectIsAuthentificated.selector';
import { logoutThunk } from '@entities/authentification/store/thunks/logout.thunk';
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

import { MainAppRoutesEnum } from '../../app/MainAppRoutesEnum';
import { MainRoutesEnum } from '../../RoutesEnum';
import { useAppDispatch } from '../../store/useAppDispatch';

const links = ['Link1', 'Link2', 'Link3'];

export const MainHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const isAuthentificated = useSelector(selectIsAuthentificated);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleLogoutButton = useCallback(() => {
    dispatch(logoutThunk())
      .then(() => {
        enqueueSnackbar('Successfull disconected', {
          variant: 'success',
        });
      })
      .catch(() => {});
  }, [dispatch, enqueueSnackbar]);

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
            <Link to={MainRoutesEnum.siteVitrine}>
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
            {links.map(link => (
              <Typography key={link} textAlign="center">
                {link}
              </Typography>
            ))}
          </Stack>
          <Stack order={{ xs: '3', sm: '2' }}>
            {isAuthentificated ? (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleLogoutButton}>
                Déconnection
              </Button>
            ) : (
              <Button
                href={`${MainRoutesEnum.app}${MainAppRoutesEnum.login}`}
                variant="outlined"
                color="secondary">
                Connexion
              </Button>
            )}
          </Stack>
        </Box>
      </Container>
    </AppBar>
  );
};
