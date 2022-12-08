import React from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import EventNoteIcon from '@mui/icons-material/EventNote';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useSelector } from 'react-redux';

import { selectTeaOrCoffeeMeetings } from '@entities/teaOrCoffeeMeetings/store/selector/getTeaOrCoffeeMeetings.selector';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  MugIcon,
  Stack,
  Typography,
} from '@ui-kit';

export const NextTeaOrCoffeeMeeting = () => {
  const teaOrCoffeeMeetings = useSelector(selectTeaOrCoffeeMeetings).slice(0, 1);

  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <MugIcon fontSize="large" />
            <Typography variant="h5">
              Votre prochain &quot;Thé ou café ?&quot;
            </Typography>
          </Stack>
        }
      />
      <CardContent>
        <Box>
          {teaOrCoffeeMeetings[0] && teaOrCoffeeMeetings[0].id ? (
            <Stack direction="row" spacing={1} alignItems="center">
              <EventNoteIcon />
              <Stack
                direction="column"
                spacing={1}
                alignItems="left"
                justifyContent="center">
                <Typography variant="subtitle1">
                  Hôte : {teaOrCoffeeMeetings[0].initiator.firstname ?? ''}{' '}
                  {teaOrCoffeeMeetings[0].initiator.lastname ?? ''}
                </Typography>
                <Typography variant="subtitle1">
                  {teaOrCoffeeMeetings[0].date.toLocaleString('en-GB', {
                    timeZone: 'UTC',
                  })}
                </Typography>
              </Stack>
              {teaOrCoffeeMeetings[0].invitedUsersStatus && (
                <Stack
                  spacing={1}
                  divider={<Divider orientation="horizontal" flexItem />}>
                  {teaOrCoffeeMeetings[0].invitedUsersStatus.map(
                    invitedUserStatus => (
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="left"
                        justifyContent="center">
                        <Typography variant="subtitle1">
                          {invitedUserStatus.invitedUser.firstname}{' '}
                          {invitedUserStatus.invitedUser.lastname}
                        </Typography>
                        {invitedUserStatus.invitationStatus === 'PENDING' && (
                          <QuestionMarkIcon />
                        )}
                        {invitedUserStatus.invitationStatus === 'ACCEPTED' && (
                          <DoneIcon />
                        )}
                        {invitedUserStatus.invitationStatus === 'DECLINED' && (
                          <ClearIcon />
                        )}
                      </Stack>
                    )
                  )}
                </Stack>
              )}
            </Stack>
          ) : (
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              divider={<Divider orientation="horizontal" flexItem />}>
              <EventNoteIcon fontSize="large" />
              <Typography variant="subtitle1">
                Vous n&apos;avez pas d&apos;invitation pour le moment
              </Typography>
            </Stack>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
