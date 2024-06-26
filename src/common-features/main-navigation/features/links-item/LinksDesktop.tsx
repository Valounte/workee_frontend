import React from 'react';

import { Badge } from '@mui/material';
import { FaCoffee } from 'react-icons/fa';

import {
  ListItem,
  AppRouterLink,
  DashboardIcon,
  ListItemIcon,
  MetricsIcon,
  SmileIcon,
  TeamIcon,
  styled,
  Tooltip,
  NotificationIcon,
  TargetIcon,
} from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';

import { MainRoutesEnum } from '../../../../RoutesEnum';

const StyledListItem = styled(ListItem)`
  justify-content: center;
`;

const StyledListItemIcon = styled(ListItemIcon)`
  justify-content: center;
`;

export const LinksDesktop = () => (
  <>
    <StyledListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.home}`}>
        <StyledListItemIcon>
          <Tooltip arrow title="Dashboard" placement="right">
            <DashboardIcon aria-label="dashboard" fontSize="large" />
          </Tooltip>
        </StyledListItemIcon>
      </AppRouterLink>
    </StyledListItem>
    <StyledListItem>
      <AppRouterLink
        to={`${MainRoutesEnum.app}${MainAppRoutesEnum.environmentMetrics}`}>
        <StyledListItemIcon>
          <Tooltip arrow title="Données d'environnement" placement="right">
            <MetricsIcon aria-label="données d'environnement" fontSize="large" />
          </Tooltip>
        </StyledListItemIcon>
      </AppRouterLink>
    </StyledListItem>
    <StyledListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.usersHandler}`}>
        <StyledListItemIcon>
          <Tooltip arrow title="Gestion" placement="right">
            <TeamIcon aria-label="gestion" fontSize="large" />
          </Tooltip>
        </StyledListItemIcon>
      </AppRouterLink>
    </StyledListItem>
    <StyledListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.feedback}`}>
        <StyledListItemIcon>
          <Tooltip arrow title="Avis" placement="right">
            <SmileIcon aria-label="avis" fontSize="large" />
          </Tooltip>
        </StyledListItemIcon>
      </AppRouterLink>
    </StyledListItem>
    <StyledListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.notifications}`}>
        <StyledListItemIcon>
          <Tooltip arrow title="Notifications" placement="right">
            <Badge variant="dot" color="secondary">
              <NotificationIcon aria-label="Notifications" fontSize="large" />
            </Badge>
          </Tooltip>
        </StyledListItemIcon>
      </AppRouterLink>
    </StyledListItem>
    <StyledListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.teaorcoffee}`}>
        <StyledListItemIcon>
          <Tooltip arrow title="Thé ou café" placement="right">
            <Badge color="secondary">
              <FaCoffee aria-label="Thé ou café" fontSize="large" />
            </Badge>
          </Tooltip>
        </StyledListItemIcon>
      </AppRouterLink>
    </StyledListItem>
    <StyledListItem>
      <AppRouterLink
        to={`${MainRoutesEnum.app}${MainAppRoutesEnum.professionalDevelopment}`}>
        <StyledListItemIcon>
          <Tooltip arrow title="Développement professionel" placement="right">
            <Badge color="secondary">
              <TargetIcon aria-label="Développement professionel" fontSize="large" />
            </Badge>
          </Tooltip>
        </StyledListItemIcon>
      </AppRouterLink>
    </StyledListItem>
  </>
);
