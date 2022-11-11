import React from 'react';

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

export const LastNotifications = () => (
  <div>
    <StyledTitle variant="subtitle1" fontSize={24}>
      Dernières notifications
    </StyledTitle>
    <StyledContainer>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}>
        <StyledNotificationBox spacing={1} direction="row" alignItems="center">
          <StyledImage src="https://www.w3schools.com/howto/img_avatar.png" />
          <Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle1" fontSize={16}>
                Jessica Chapuis
              </Typography>
              <Typography variant="subtitle1" fontSize={8}>
                21/10/2022 11:32
              </Typography>
            </Stack>
            <Typography variant="body2" fontSize={13}>
              On mange quoi demain ? non par ce que cest le genre de choses super
              important et faut en discuter le plus vite possible
            </Typography>
          </Stack>
        </StyledNotificationBox>
        <StyledNotificationBox spacing={1} direction="row" alignItems="center">
          <StyledImage src="https://www.w3schools.com/howto/img_avatar.png" />
          <Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle1" fontSize={16}>
                Jessica Chapuis
              </Typography>
              <Typography variant="subtitle1" fontSize={8}>
                21/10/2022 11:32
              </Typography>
            </Stack>
            <Typography variant="body2" fontSize={13}>
              On mange quoi demain ? non par ce que cest le genre de choses super
              important et faut en discuter le plus vite possible
            </Typography>
          </Stack>
        </StyledNotificationBox>{' '}
        <StyledNotificationBox spacing={1} direction="row" alignItems="center">
          <StyledImage src="https://www.w3schools.com/howto/img_avatar.png" />
          <Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="subtitle1" fontSize={16}>
                Jessica Chapuis
              </Typography>
              <Typography variant="subtitle1" fontSize={8}>
                21/10/2022 11:32
              </Typography>
            </Stack>
            <Typography variant="body2" fontSize={13}>
              On mange quoi demain ? non par ce que cest le genre de choses super
              important et faut en discuter le plus vite possible
            </Typography>
          </Stack>
        </StyledNotificationBox>
      </Stack>
    </StyledContainer>
  </div>
);
