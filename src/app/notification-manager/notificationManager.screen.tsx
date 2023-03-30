import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAsync } from 'react-use';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getNotificationsThunk } from '@entities/notifications/store/thunks/getNotifications.thunk';
import { Box, Stack, Typography } from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';
import { MainRoutesEnum } from 'src/RoutesEnum';
import { NotificationIcon } from 'src/ui-kit/icons/Notification/Notification';

import { NotificationManagerForm } from './features/notificationManagerForm';
import { DataGridNotifications } from './features/notifications/DataGridNotifications';
import { useAppDispatch } from '../../store/useAppDispatch';

/* eslint-disable no-unused-vars */
enum TabsEnum {
  notifications = 'notifications',
  createNotifications = 'createNotifications',
}
/* eslint-enable no-unused-vars */

const NotificationManagerScreen = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  if (!token) {
    // TODO: rediriger plutot sur la page "tu n'as pas access a cette page"
    navigate(`${MainRoutesEnum.app}${MainAppRoutesEnum.login}`);
  }
  const { loading: loadingNotifications, error: errorNotifications } = useAsync(() =>
    dispatch(getNotificationsThunk({ token }))
  );

  return (
    <>
      <Box height="8vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <NotificationIcon fontSize="large" />
          <Typography variant="h4">Notifications</Typography>
        </Stack>
        <Typography variant="body1">
          Gérer vos notifications depuis cette page
        </Typography>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} p={2}>
        <NotificationManagerForm />
        <DataGridNotifications
          loading={loadingNotifications}
          error={errorNotifications}
        />
      </Stack>
    </>
  );
};

export default NotificationManagerScreen;
