import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAsync } from 'react-use';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getNotificationsThunk } from '@entities/notifications/store/thunks/getNotifications.thunk';
import { RoutesEnum } from '@entities/RoutesEnum';
import { Tabs, Tab, Box, TabPanel } from '@ui-kit';

import { useAppDispatch } from '../../store/useAppDispatch';
import {NotificationManagerForm} from "./features/notificationManagerForm";
import { DataGridNotifications } from './features/notifications/DataGridNotifications';

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
    navigate(RoutesEnum.login);
  }

  const handleChangeTab = (event: React.SyntheticEvent, newValue: TabsEnum) => {
    setValue(newValue);
  };

  const { loading: loadingNotifications, error: errorNotifications } = useAsync(() =>
    dispatch(getNotificationsThunk({ token }))
  );

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Tabs value={value} onChange={handleChangeTab} variant="scrollable">
          <Tab disableRipple value={TabsEnum.notifications} label="Notification" />
          <Tab disableRipple value={TabsEnum.createNotifications} label="Créer une notification" />
        </Tabs>
      </Box>


      <TabPanel value={value} index={TabsEnum.notifications}>
        <DataGridNotifications loading={loadingNotifications} error={errorNotifications} />
      </TabPanel>


      <TabPanel value={value} index={TabsEnum.createNotifications}>
        <NotificationManagerForm />
      </TabPanel>

    </div>
  );
};

export default NotificationManagerScreen;
