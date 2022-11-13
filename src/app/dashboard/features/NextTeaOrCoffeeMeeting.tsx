import React from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import EventNoteIcon from '@mui/icons-material/EventNote';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useSelector } from 'react-redux';

import { selectTeaOrCoffeeMeetings } from '@entities/teaOrCoffeeMeetings/store/selector/getTeaOrCoffeeMeetings.selector';
import { Divider, Stack, styled, Typography } from '@ui-kit';

const StyledTitle = styled(Typography)`
  margin-top: 28px;
  margin-left: 27px;
`;

const StyledIcon = styled(EventNoteIcon)`
  font-size: 90px;
  color: #d9d9d9;
`;

const StyledContainer = styled.div`
  margin-left: 27px;
  margin-top: 25px;
  margin-right: 27px;
`;

const PendingIcon = styled(QuestionMarkIcon)`
  font-size: 20px;
  color: #d9d9d9;
`;

const AcceptedIcon = styled(DoneIcon)`
  font-size: 20px;
  color: #d9d9d9;
  //align icon to the right
  margin-left: auto;
`;

const RejectedIcon = styled(ClearIcon)`
  font-size: 20px;
  color: #d9d9d9;
`;

const StyledInvitedUserContainer = styled.div`
  display: flex;
  margin-top: 10px;
  border-left: 1px solid #d9d9d9;
  padding-left: 20px;
  margin-left: 20px;
`;

export const NextTeaOrCoffeeMeeting = () => {
  const teaOrCoffeeMeetings = useSelector(selectTeaOrCoffeeMeetings).slice(0, 1);

  return (
    <>
      <StyledTitle variant="subtitle1" fontSize={24}>
        Votre prochain &quot;Thé ou café ?&quot;
      </StyledTitle>
      <StyledContainer>        
        { (teaOrCoffeeMeetings[0] && teaOrCoffeeMeetings[0].id) ?
          <Stack direction="row" alignItems="center">
            <StyledIcon />
            <Stack spacing={1} alignItems="left" justifyContent="center">
              <Typography variant="subtitle1" fontSize={16}>
                Hôte : {teaOrCoffeeMeetings[0].initiator.firstname ?? ''}{' '}
                {teaOrCoffeeMeetings[0].initiator.lastname ?? ''}
              </Typography>
              <Typography variant="subtitle1" fontSize={16}>
                {teaOrCoffeeMeetings[0].date.toLocaleString('en-GB', {
                  timeZone: 'UTC',
                })}
              </Typography>
            </Stack>
            {teaOrCoffeeMeetings[0].invitedUsersStatus &&
            <StyledInvitedUserContainer style={{ maxHeight: 150, overflow: 'auto' }}>
              <Stack
                spacing={1}
                divider={<Divider orientation="horizontal" flexItem />}>
                {teaOrCoffeeMeetings[0].invitedUsersStatus.map(invitedUserStatus => (
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="left"
                    justifyContent="center">
                    <Typography variant="subtitle1" fontSize={10}>
                      {invitedUserStatus.invitedUser.firstname}{' '}
                      {invitedUserStatus.invitedUser.lastname}
                    </Typography>
                    {invitedUserStatus.invitationStatus === 'PENDING' && (
                      <PendingIcon />
                    )}
                    {invitedUserStatus.invitationStatus === 'ACCEPTED' && (
                      <AcceptedIcon />
                    )}
                    {invitedUserStatus.invitationStatus === 'DECLINED' && (
                      <RejectedIcon />
                    )}
                  </Stack>
                ))}
              </Stack>
            </StyledInvitedUserContainer>
            }
          </Stack>
          :
          <Stack direction="row" alignItems="center">
          <StyledIcon />
          <Stack spacing={1} alignItems="left" justifyContent="center">
            <Typography variant="subtitle1" fontSize={16}>
              Pas de meeting wsh
            </Typography>
            <Typography variant="subtitle1" fontSize={16}>
              Coucou
            </Typography>
          </Stack>
          </Stack>
        }
      </StyledContainer>
    </>
  );
};
