import React from 'react';

import { FaCoffee } from 'react-icons/fa';

import {
  ListItem,
  AppRouterLink,
  Typography,
  DashboardIcon,
  ListItemIcon,
  MetricsIcon,
  NotificationIcon,
  SmileIcon,
  TeamIcon,
  TargetIcon,
} from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';

import { MainRoutesEnum } from '../../../../RoutesEnum';

export const LinksSmallDevices = () => (
  <>
    <ListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.home}`}>
        <ListItemIcon>
          <DashboardIcon aria-label="dashboard" fontSize="large" />
        </ListItemIcon>
        <Typography>Dashboard</Typography>
      </AppRouterLink>
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
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.feedback}`}>
        <ListItemIcon>
          <SmileIcon aria-label="avis" fontSize="large" />
        </ListItemIcon>
        <Typography>Avis</Typography>
      </AppRouterLink>
    </ListItem>
    <ListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.notifications}`}>
        <ListItemIcon>
          <NotificationIcon aria-label="Notifications" fontSize="large" />
        </ListItemIcon>
        <Typography>Notifications</Typography>
      </AppRouterLink>
    </ListItem>
    <ListItem>
      <AppRouterLink
        to={`${MainRoutesEnum.app}${MainAppRoutesEnum.professionalDevelopment}`}>
        <ListItemIcon>
          <TargetIcon aria-label="Développement professionel" fontSize="large" />
        </ListItemIcon>
        <Typography>Développement professionel</Typography>
      </AppRouterLink>
      <ListItem>
        <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.teaorcoffee}`}>
          <ListItemIcon>
            <FaCoffee aria-label="Thé ou café" fontSize="large" />
          </ListItemIcon>
          <Typography>Thé ou café</Typography>
        </AppRouterLink>
      </ListItem>
    </ListItem>
  </>
);
