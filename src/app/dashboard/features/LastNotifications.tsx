import React from 'react';

import { useSelector } from 'react-redux';

import { selectNotifications } from '@entities/notifications/store/selectors/getNotifications.selector';
import { Divider, Stack, styled, Typography } from '@ui-kit';

const StyledTitle = styled(Typography)`
  margin-top: 28px;
  margin-left: 27px;
`;

const StyledContainer = styled.div`
  margin-left: 27px;
  margin-right: 27px;
`;

const StyledNotificationBox = styled(Stack)`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StyledImage = styled.img`
  border-radius: 20%;
  width: 60px;
  height: 60px;
  padding-right: auto;
  padding-left: auto;
`;

export const LastNotifications = () => {
  const notifications = useSelector(selectNotifications);

  return (
    <div>
      <StyledTitle variant="subtitle1" fontSize={24}>
        Dernières notifications
      </StyledTitle>
      <StyledContainer>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}>
          {notifications.slice(0, 3).map(notification => (
            <StyledNotificationBox spacing={1} direction="row" alignItems="center">
              <>
                <StyledImage src="https://www.w3schools.com/howto/img_avatar.png" />
                <Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="subtitle1" fontSize={16}>
                      {notification.senderFirstname} {notification.senderLastname}
                    </Typography>
                    <Typography variant="subtitle1" fontSize={8}>
                      {notification.sentAt}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" fontSize={13}>
                    {notification.message}
                  </Typography>
                </Stack>
              </>
            </StyledNotificationBox>
          ))}
        </Stack>
      </StyledContainer>
    </div>
  );
};
