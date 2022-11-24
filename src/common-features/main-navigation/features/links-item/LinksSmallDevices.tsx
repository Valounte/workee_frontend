import React from 'react';

import {
  ListItem,
  AppRouterLink,
  Typography,
  DashboardIcon,
  ListItemIcon,
  MetricsIcon,
  NewsIcon,
  NotificationIcon,
  SmileIcon,
  TeamIcon,
} from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';

import { MainRoutesEnum } from '../../../../RoutesEnum';

export const LinksSmallDevices = () => (
  <>
    <ListItem>
      <ListItemIcon>
        <DashboardIcon aria-label="dashboard" fontSize="large" />
      </ListItemIcon>
      <Typography>Dashboard</Typography>
    </ListItem>
    <ListItem>
      <AppRouterLink
        to={`${MainRoutesEnum.app}${MainAppRoutesEnum.environmentMetrics}`}>
        <ListItemIcon>
          <MetricsIcon aria-label="données d'environnement" fontSize="large" />
        </ListItemIcon>
        <Typography>Données d&apos;environment</Typography>
      </AppRouterLink>
    </ListItem>
    <ListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.usersHandler}`}>
        <ListItemIcon>
          <TeamIcon aria-label="gestion" fontSize="large" />
        </ListItemIcon>
        <Typography>Gestion</Typography>
      </AppRouterLink>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <SmileIcon aria-label="avis" fontSize="large" />
      </ListItemIcon>
      <Typography>Avis</Typography>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <NewsIcon aria-label="news" fontSize="large" />
      </ListItemIcon>
      <Typography>Actualités</Typography>
    </ListItem>
    <ListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.Notifications}`}>
        <ListItemIcon>
          <NotificationIcon aria-label="Notifications" fontSize="large" />
        </ListItemIcon>
        <Typography>Notifications</Typography>
      </AppRouterLink>
    </ListItem>
  </>
);
