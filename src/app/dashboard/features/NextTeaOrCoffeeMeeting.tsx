import React from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import EventNoteIcon from '@mui/icons-material/EventNote';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Collapse } from '@mui/material';
import format from 'date-fns/format';
import { useSelector } from 'react-redux';

import { selectTeaOrCoffeeMeetings } from '@entities/teaOrCoffeeMeetings/store/selector/getTeaOrCoffeeMeetings.selector';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItemText,
  Stack,
  Typography,
  ListItemButton,
  ListItemIcon,
  UserIcon,
  ExpandLessIcon,
  ExpandMoreIcon,
  ListItem,
  styled,
} from '@ui-kit';

const StyledListItem = styled(ListItem)`
  padding: 4px 16px;
`;

export const NextTeaOrCoffeeMeeting = () => {
  const teaOrCoffeeMeetings = useSelector(selectTeaOrCoffeeMeetings).slice(0, 1);

  const meetingDate =
    teaOrCoffeeMeetings[0] !== undefined
      ? format(new Date(teaOrCoffeeMeetings[0].date), 'dd MMM yyyy à HH:mm')
      : undefined;

  const [guestListOpen, setGuestListOpen] = React.useState(false);

  const toggleGuestList = () => {
    setGuestListOpen(!guestListOpen);
  };

  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h5">
              Votre prochain &quot;Thé ou café ?&quot;
            </Typography>
          </Stack>
        }
      />
      <CardContent>
        {teaOrCoffeeMeetings[0] && teaOrCoffeeMeetings[0].id ? (
          <Stack direction="row" spacing={1}>
            <Typography color="secondary">{meetingDate}</Typography>
            <Stack
              spacing={1}
              divider={<Divider orientation="horizontal" flexItem />}>
              <Stack>
                <Stack direction="column" spacing={1}>
                  <Typography variant="subtitle1">
                    <span color="secondary">
                      {teaOrCoffeeMeetings[0].initiator.firstname ?? ''}{' '}
                      {teaOrCoffeeMeetings[0].initiator.lastname ?? ''}{' '}
                    </span>
                    vous invite à prendre une pause !
                  </Typography>
                </Stack>
              </Stack>
              {teaOrCoffeeMeetings[0].invitedUsersStatus && (
                <List key={teaOrCoffeeMeetings[0].id}>
                  <ListItemButton onClick={toggleGuestList}>
                    <ListItemIcon>
                      <UserIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary="Participants" />
                    {guestListOpen ? (
                      <ExpandLessIcon fontSize="large" />
                    ) : (
                      <ExpandMoreIcon fontSize="large" />
                    )}
                  </ListItemButton>
                  <Collapse in={guestListOpen} timeout="auto" unmountOnExit>
                    <List disablePadding>
                      {teaOrCoffeeMeetings[0].invitedUsersStatus.map(
                        invitedUserStatus => (
                          <StyledListItem>
                            <ListItemIcon>
                              {invitedUserStatus.invitationStatus === 'PENDING' && (
                                <QuestionMarkIcon
                                  color="secondary"
                                  fontSize="small"
                                />
                              )}
                              {invitedUserStatus.invitationStatus === 'ACCEPTED' && (
                                <DoneIcon color="success" fontSize="small" />
                              )}
                              {invitedUserStatus.invitationStatus === 'DECLINED' && (
                                <ClearIcon color="error" fontSize="small" />
                              )}
                            </ListItemIcon>
                            <ListItemText>
                              {invitedUserStatus.invitedUser.firstname}{' '}
                              {invitedUserStatus.invitedUser.lastname}
                            </ListItemText>
                          </StyledListItem>
                        )
                      )}
                    </List>
                  </Collapse>
                </List>
              )}
            </Stack>
          </Stack>
        ) : (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            divider={<Divider orientation="horizontal" flexItem />}>
            <EventNoteIcon fontSize="large" color="info" />
            <Typography variant="subtitle1">
              Vous n&apos;avez pas d&apos;invitation pour le moment
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};
