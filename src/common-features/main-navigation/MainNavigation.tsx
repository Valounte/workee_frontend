import React from 'react';

import { Link } from 'react-router-dom';

import { RoutesEnum } from '@entities/RoutesEnum';
import {
  styled,
  Stack,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider,
  Avatar,
  SignoutIcon,
  DashboardIcon,
  AnalyticsIcon,
  TeamIcon,
  MetricsIcon,
  AdminIcon
} from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo.svg';

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #3f1d01;
`;

export const MainNavigation = () => (
  <Stack spacing={1} justifyContent="space-between" p={4} borderRight="1px solid grey">
    <MenuItem>
      <Link to={RoutesEnum.home}>
        <Logo width={100} height="10%" />
      </Link>
    </MenuItem>
    <Stack spacing={8}>
      <MenuItem disableRipple>
        <Stack direction="column" alignItems="center" mt={0} spacing={1}>
          <Avatar />
          <Typography variant="body1">René Coty</Typography>
          <Typography variant="body1">r.coty@gmail.com</Typography>
        </Stack>
      </MenuItem>
      <Stack spacing={3}>
        <MenuItem>
          <ListItemIcon>
            <DashboardIcon fontSize="large" />
          </ListItemIcon>
          <Typography>Dashboard</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AdminIcon fontSize="large" />
          </ListItemIcon>
          <Typography>Admin</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AnalyticsIcon fontSize="large" />
          </ListItemIcon>
          <Typography>Statistiques</Typography>
        </MenuItem>
        <MenuItem>
          <StyledLink to={RoutesEnum.environmentMetrics}>
            <ListItemIcon>
              <MetricsIcon fontSize="large" />
            </ListItemIcon>
            <Typography>Workee</Typography>
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={RoutesEnum.usersHandler}>
            <ListItemIcon>
              <TeamIcon fontSize="large" />
            </ListItemIcon>
            <Typography>Gestion</Typography>
          </StyledLink>
        </MenuItem>
      </Stack>
    </Stack>
    <Stack spacing={1}>
      <Divider/>
      <StyledLink to={RoutesEnum.home}>
        <MenuItem>
          <ListItemIcon>
            <SignoutIcon fontSize="large" />
          </ListItemIcon>
          <Typography>Déconnexion</Typography>
        </MenuItem>
      </StyledLink>
    </Stack>
  </Stack>
);
