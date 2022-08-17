import React from 'react';

import { Link } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import {
  Stack,
  // MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider,
  Avatar,
  SignoutIcon,
} from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo.svg';

export const MainNavigation = () => (
  // <MenuList>
  <Stack spacing={3} justifyContent="space-between" py={2}>
    <MenuItem>
      <Link to={RoutesEnum.home}>
        <Logo width={100} height="10%" />
      </Link>
    </MenuItem>
    <MenuItem>
      <Stack direction="column" alignItems="center" mt={0}>
        <Avatar />
        <Typography variant="body1">René Coty</Typography>
        <Typography variant="body1">r.coty@gmail.com</Typography>
      </Stack>
    </MenuItem>
    <Stack>
      <MenuItem>
        <ListItemIcon>
          <SignoutIcon fontSize="large" />
        </ListItemIcon>
        <Typography>Dashboard</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SignoutIcon fontSize="large" />
        </ListItemIcon>
        <Typography>Admin</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SignoutIcon fontSize="large" />
        </ListItemIcon>
        <Typography>Statistiques</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SignoutIcon fontSize="large" />
        </ListItemIcon>
        <Typography>Workee</Typography>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <SignoutIcon fontSize="large" />
        </ListItemIcon>
        <Typography>Gestion</Typography>
      </MenuItem>
    </Stack>
    <Stack>
      <Divider />
      <Link to={RoutesEnum.home}>
        <MenuItem>
          <ListItemIcon>
            <SignoutIcon fontSize="large" />
          </ListItemIcon>
          <Typography>Déconnexion</Typography>
        </MenuItem>
      </Link>
    </Stack>
  </Stack>
  // </MenuList>
);
