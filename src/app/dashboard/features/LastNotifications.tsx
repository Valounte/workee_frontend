import React from 'react';

import format from 'date-fns/format';
import { useSelector } from 'react-redux';

import { selectNotifications } from '@entities/notifications/store/selectors/getNotifications.selector';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from '@ui-kit';

const StyledCardContent = styled(CardContent)`
  padding-top: 0;
`;

const StyledListItem = styled(ListItem)`
  padding: 16px 0;
`;

export const LastNotifications = () => {
  const notifications = useSelector(selectNotifications);
  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h5">Dernières notifications</Typography>
          </Stack>
        }
      />
      <StyledCardContent>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}>
          {notifications.slice(0, 5).map(notification => (
            <List key={notification.id}>
              <StyledListItem>
                <Avatar />
                <Stack direction="column" width="100%">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Typography variant="subtitle1">
                      {notification.senderFirstname} {notification.senderLastname}
                    </Typography>
                    <Chip
                      label={format(new Date(notification.sentAt), 'dd MMM yyyy')}
                      size="small"
                      color="secondary"
                      variant="outlined"
                    />
                  </Stack>
                  <Typography variant="body2">{notification.message}</Typography>
                </Stack>
              </StyledListItem>
            </List>
          ))}
        </Stack>
      </StyledCardContent>
    </Card>
  );
};
