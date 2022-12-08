import React from 'react';

import format from 'date-fns/format';
import { useSelector } from 'react-redux';

import { selectNotifications } from '@entities/notifications/store/selectors/getNotifications.selector';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  List,
  ListItem,
  NotificationIcon,
  Stack,
  Typography,
} from '@ui-kit';

export const LastNotifications = () => {
  const notifications = useSelector(selectNotifications);
  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <NotificationIcon fontSize="large" />
            <Typography variant="h5">Dernières notifications</Typography>
          </Stack>
        }
      />
      <CardContent>
        <Box>
          <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}>
            {notifications.slice(0, 5).map(notification => (
              <List key={notification.id}>
                <ListItem>
                  <Avatar />
                  <Stack direction="column" width="100%">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center">
                      <Typography variant="subtitle1" color="primary">
                        {notification.senderFirstname} {notification.senderLastname}
                      </Typography>
                      <Chip
                        label={format(new Date(notification.sentAt), 'dd MMM yyyy')}
                        variant="outlined"
                      />
                    </Stack>
                    <Typography variant="body2">{notification.message}</Typography>
                  </Stack>
                </ListItem>
              </List>
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
