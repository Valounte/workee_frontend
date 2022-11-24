import React from 'react';

import {
  ListItem,
  AppRouterLink,
  DashboardIcon,
  ListItemIcon,
  MetricsIcon,
  NewsIcon,
  SmileIcon,
  TeamIcon,
  styled,
  Tooltip,
  NotificationIcon,
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
      <StyledListItemIcon>
        <Tooltip arrow title="Dashboard" placement="right">
          <DashboardIcon aria-label="dashboard" fontSize="large" />
        </Tooltip>
      </StyledListItemIcon>
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
      <StyledListItemIcon>
        <Tooltip arrow title="Avis" placement="right">
          <SmileIcon aria-label="avis" fontSize="large" />
        </Tooltip>
      </StyledListItemIcon>
    </StyledListItem>
    <StyledListItem>
      <StyledListItemIcon>
        <Tooltip arrow title="News" placement="right">
          <NewsIcon aria-label="news" fontSize="large" />
        </Tooltip>
      </StyledListItemIcon>
    </StyledListItem>

    <StyledListItem>
      <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.Notifications}`}>
        <StyledListItemIcon>
          <Tooltip arrow title="Notifications" placement="right">
            <NotificationIcon aria-label="Notifications" fontSize="large" />
          </Tooltip>
        </StyledListItemIcon>
      </AppRouterLink>
    </StyledListItem>
  </>
);
