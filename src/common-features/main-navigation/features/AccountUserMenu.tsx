import React from 'react';

import { useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectMe } from '@entities/authentification/store/selectors/selectMe.selector';
import {
  ListItem,
  AppRouterLink,
  LinearProgress,
  Typography,
  Stack,
  Avatar,
  IconButton,
  Popover,
  Divider,
  ExpandMoreIcon,
  Tooltip,
  styled,
} from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';

import { MainRoutesEnum } from '../../../RoutesEnum';

const StyledAvatar = styled(Avatar)`
  margin-right: 0;
`;

export const AccountUserMenu = () => {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const me = useSelector(selectMe);
  const [anchorUser, setAnchorUser] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorUser);
  const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorUser(event.currentTarget);
  };
  const closeUserMenu = () => {
    setAnchorUser(null);
  };

  if (!me) {
    return <LinearProgress color="secondary" />;
  }

  const { firstname, lastname, email } = me;

  return (
    <>
      <ListItem divider>
        {!onlySmallScreen ? (
          <Tooltip arrow title="Préférences utilisateur" placement="right">
            <IconButton
              onClick={openUserMenu}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}>
              <StyledAvatar />
            </IconButton>
          </Tooltip>
        ) : (
          <>
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
              onClick={openUserMenu}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}>
              <ExpandMoreIcon fontSize="large" />
            </IconButton>
          </>
        )}
      </ListItem>
      <Popover
        id="account-menu"
        open={open}
        anchorEl={anchorUser}
        onClose={closeUserMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <ListItem>
          <Typography variant="body1">Profile</Typography>
        </ListItem>
        <Divider />
        <AppRouterLink
          onClick={closeUserMenu}
          to={`${MainRoutesEnum.app}${MainAppRoutesEnum.settings}`}>
          <ListItem>
            <Typography variant="body1">Paramètres</Typography>
          </ListItem>
        </AppRouterLink>
        <Divider />
        <AppRouterLink to={MainRoutesEnum.landingPage}>
          <ListItem>
            <Typography onClick={closeUserMenu} variant="body1">
              Déconnexion
            </Typography>
          </ListItem>
        </AppRouterLink>
      </Popover>
    </>
  );
};
