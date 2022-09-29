import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectMe } from '@entities/authentification/store/selectors/selectMe.selector';
import {
  Stack,
  Menu,
  ListItem,
  ListItemIcon,
  Typography,
  Avatar,
  Divider,
  SignoutIcon,
  styled,
  DashboardIcon,
  AdminIcon,
  AnalyticsIcon,
  MetricsIcon,
  TeamIcon,
  List,
  MoreIcon,
  DropdownIcon,
  IconButton,
} from '@ui-kit';
import { ReactComponent as Logo } from '@ui-kit/images/workee-logo.svg';

import { MainAppRoutesEnum } from '../../app/MainAppRoutesEnum';
import { MainRoutesEnum } from '../../RoutesEnum';

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #3f1d01;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: 0;
`;

const StyledListItemLogo = styled(ListItem)`
  justify-content: space-between;
`;

const StyledListItem = styled(ListItem)`
  justify-content: center;
`;

const StyledListItemIcon = styled(ListItemIcon)`
  justify-content: center;
`;

export const MainNavigation = () => {
  const me = useSelector(selectMe);
  const [isShow, setIsShow] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setIsShow(!isShow);
  };

  if (!me) {
    return <>loading</>;
  }

  const { firstname, lastname, email } = me;

  return (
    <Stack justifyContent="flex-start" borderRight="1px solid grey">
      <List>
        {isShow ? (
          <>
            <StyledListItemLogo divider>
              <Logo width={100} height="100%" />
              <MoreIcon fontSize="large" onClick={toggleMenu} />
            </StyledListItemLogo>
            <ListItem divider>
              <Stack direction="row" alignItems="center" spacing={1} mr={2}>
                <Avatar />
                <Stack>
                  <Typography variant="body1">
                    {firstname} {lastname}
                  </Typography>
                  <Typography variant="body1">{email}</Typography>
                </Stack>
              </Stack>
              <IconButton
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <DropdownIcon fontSize="large" />
              </IconButton>
              <Menu
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}>
                <ListItem>
                  <Avatar />
                  <Typography>Profile</Typography>
                </ListItem>
                <Divider />
                <StyledLink to={MainRoutesEnum.landingPage}>
                  <ListItem>
                    <ListItemIcon>
                      <SignoutIcon fontSize="large" />
                    </ListItemIcon>
                    <Typography>Déconnexion</Typography>
                  </ListItem>
                </StyledLink>
              </Menu>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DashboardIcon fontSize="large" />
              </ListItemIcon>
              <Typography>Dashboard</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AdminIcon fontSize="large" />
              </ListItemIcon>
              <Typography>Admin</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AnalyticsIcon fontSize="large" />
              </ListItemIcon>
              <Typography>Statistiques</Typography>
            </ListItem>
            <ListItem>
              <StyledLink to={MainAppRoutesEnum.environmentMetrics}>
                <ListItemIcon>
                  <MetricsIcon fontSize="large" />
                </ListItemIcon>
                <Typography>Workee</Typography>
              </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to={MainAppRoutesEnum.usersHandler}>
                <ListItemIcon>
                  <TeamIcon fontSize="large" />
                </ListItemIcon>
                <Typography>Gestion</Typography>
              </StyledLink>
            </ListItem>
            <Divider />
            <StyledLink to={MainRoutesEnum.landingPage}>
              <ListItem>
                <ListItemIcon>
                  <SignoutIcon fontSize="large" />
                </ListItemIcon>
                <Typography>Déconnexion</Typography>
              </ListItem>
            </StyledLink>
          </>
        ) : (
          <>
            <StyledListItem divider onClick={toggleMenu}>
              <StyledListItemIcon>
                <MoreIcon fontSize="large" onClick={toggleMenu} />
              </StyledListItemIcon>
            </StyledListItem>
            <StyledListItem divider>
              <Stack direction="row" alignItems="center" mt={0} spacing={1}>
                <StyledAvatar />
              </Stack>
            </StyledListItem>
            <StyledListItem>
              <StyledListItemIcon>
                <DashboardIcon fontSize="large" />
              </StyledListItemIcon>
            </StyledListItem>
            <StyledListItem>
              <StyledListItemIcon>
                <AdminIcon fontSize="large" />
              </StyledListItemIcon>
            </StyledListItem>
            <StyledListItem>
              <StyledListItemIcon>
                <AnalyticsIcon fontSize="large" />
              </StyledListItemIcon>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to={MainAppRoutesEnum.environmentMetrics}>
                <StyledListItemIcon>
                  <MetricsIcon fontSize="large" />
                </StyledListItemIcon>
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to={MainAppRoutesEnum.usersHandler}>
                <StyledListItemIcon>
                  <TeamIcon fontSize="large" />
                </StyledListItemIcon>
              </StyledLink>
            </StyledListItem>
            <Divider />
            <StyledLink to={MainRoutesEnum.landingPage}>
              <StyledListItem>
                <StyledListItemIcon>
                  <SignoutIcon fontSize="large" />
                </StyledListItemIcon>
              </StyledListItem>
            </StyledLink>
          </>
        )}
      </List>
    </Stack>
  );
};
