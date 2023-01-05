import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAsync } from 'react-use';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getNotificationsThunk } from '@entities/notifications/store/thunks/getNotifications.thunk';
import { styled, Tabs, Tab, Box, TabPanel, Stack, Typography } from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';
import { MainRoutesEnum } from 'src/RoutesEnum';
import { NotificationIcon } from 'src/ui-kit/icons/Notification/Notification';

import { useAppDispatch } from '../../store/useAppDispatch';
import { NotificationManagerForm } from './features/notificationManagerForm';
import { DataGridNotifications } from './features/notifications/DataGridNotifications';

const StyledTabs = styled(Tabs)`
  border-bottom: '1px solid grey';
`;

const StyledTab = styled(Tab)`
  margin: 2px 0 !important;
`;

/* eslint-disable no-unused-vars */
enum TabsEnum {
  notifications = 'notifications',
  createNotifications = 'createNotifications',
}
/* eslint-enable no-unused-vars */

const NotificationManagerScreen = () => {
  const [value, setValue] = React.useState(TabsEnum.notifications);
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  if (!token) {
    // TODO: rediriger plutot sur la page "tu n'as pas access a cette page"
    navigate(`${MainRoutesEnum.app}${MainAppRoutesEnum.login}`);
  }

  const handleChangeTab = (event: React.SyntheticEvent, newValue: TabsEnum) => {
    setValue(newValue);
  };

  const { loading: loadingNotifications, error: errorNotifications } = useAsync(() =>
    dispatch(getNotificationsThunk({ token }))
  );

  return (
    <>
      <Box height="15vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <NotificationIcon fontSize="large" />
          <Typography variant="h4">Notifications</Typography>
        </Stack>
        <StyledTabs value={value} onChange={handleChangeTab}>
          <StyledTab
            disableRipple
            value={TabsEnum.notifications}
            label="Notifications"
          />
          <StyledTab
            disableRipple
            value={TabsEnum.createNotifications}
            label="Créer une notification"
          />
        </StyledTabs>
      </Box>
      <Box p={2}>
        <TabPanel value={value} index={TabsEnum.notifications}>
          <DataGridNotifications
            loading={loadingNotifications}
            error={errorNotifications}
          />
        </TabPanel>
        <TabPanel value={value} index={TabsEnum.createNotifications}>
          <NotificationManagerForm />
        </TabPanel>
      </Box>
    </>
  );
};

export default NotificationManagerScreen;
