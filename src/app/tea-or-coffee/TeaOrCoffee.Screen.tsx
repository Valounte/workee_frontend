import React from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import {
  PickersDay,
  PickersDayProps,
} from '@mui/x-date-pickers/PickersDay/PickersDay';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { addMinutes, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { BiTimeFive } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';

import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@ui-kit';

import { selectToken } from '../../entities/authentification/store/selectors/selectToken.selector';
import { selectTeaOrCoffeeMeetings } from '../../entities/teaOrCoffeeMeetings/store/selector/getTeaOrCoffeeMeetings.selector';
import { getTeaOrCoffeeMeetingThunk } from '../../entities/teaOrCoffeeMeetings/store/thunks/getTeaOrCoffeeMeetings.thunk';
import { useAppDispatch } from '../../store/useAppDispatch';
import { TeaOrCoffeDataGrid } from './TeaOrCoffeDataGrid';

const isSameDate = (date: Date | null, dateArray: string[]) => {
  const dateDayTime = date?.getDate();
  const dateMonthTime = date?.getMonth();
  const dateYearTime = date?.getFullYear();
  return dateArray
    .map(d => new Date(d))
    .some(d => {
      if (
        d.getDate() === dateDayTime &&
        d.getMonth() === dateMonthTime &&
        d.getFullYear() === dateYearTime
      )
        return true;
      return false;
    });
};

const renderDay = (
  day: Date,
  selectedDays: Date[],
  pickersDayProps: PickersDayProps<Date>,
  dateArray: string[]
) => {
  const dateDay = day ? new Date(day) : null;
  const backgroundColor = isSameDate(dateDay, dateArray) ? 'orange' : 'transparent';

  return (
    <PickersDay
      {...pickersDayProps}
      sx={{
        backgroundColor,
        '&:hover': {
          backgroundColor,
        },
      }}
    />
  );
};

const TeaOrCoffeeScreen = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());
  const dispatch = useAppDispatch();

  const teaOrCoffeeMeetings = useSelector(selectTeaOrCoffeeMeetings);
  const teaOrCoffeeMeetingsDate = teaOrCoffeeMeetings.map(t => t.date.toString());

  const token = useSelector(selectToken);
  const { loading } = useAsync(() =>
    dispatch(getTeaOrCoffeeMeetingThunk({ token }))
  );

  if (loading) return <LinearProgress color="secondary" />;

  const meetingsToday = teaOrCoffeeMeetings.filter(
    t =>
      new Date(t.date).getDate() === selectedDate?.getDate() &&
      new Date(t.date).getMonth() === selectedDate?.getMonth() &&
      new Date(t.date).getFullYear() === selectedDate?.getFullYear()
  );

  return (
    <Box maxWidth="100%" pt={2}>
      <Typography variant="h4">Thé ou café</Typography>
      <Typography variant="subtitle1">
        Discussion autour d&apos;un café ? A moins que vous soyez plus thé ?
      </Typography>
      <Card
        sx={{
          maxWidth: 700,
        }}>
        <Stack direction="row" spacing={2} p={4}>
          <Box>
            {meetingsToday.length > 0 ? (
              <>
                <Typography variant="h5">Votre prochain Thé ou Café</Typography>
                <Stack py={2} spacing={1}>
                  <Avatar src="/broken-image.jpg" />
                  <Typography variant="body1">
                    {meetingsToday[0].initiator.firstname}{' '}
                    {meetingsToday[0].initiator.lastname}
                  </Typography>
                </Stack>
                <Typography variant="body1" fontWeight={500}>
                  {meetingsToday[0].name}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  alignContent="center"
                  spacing={0.5}>
                  <BiTimeFive fontSize="medium" />

                  <Typography variant="body1" py={1}>
                    {format(new Date(meetingsToday[0].date), 'H:mm')} -{' '}
                    {format(addMinutes(new Date(meetingsToday[0].date), 15), 'H:mm')}
                  </Typography>
                </Stack>
                <Typography variant="body1">
                  {meetingsToday[0].initiator.firstname}{' '}
                  {meetingsToday[0].initiator.lastname} te propose un thé ou un café
                  ce jour. Tu peux accompagner ta boisson avec la viennoiserie de ton
                  choix !
                </Typography>
              </>
            ) : (
              <Box
                height="100%"
                display="flex"
                alignContent="center"
                alignItems="center"
                justifyContent="center"
                justifyItems="center">
                <Typography variant="body1">
                  Aucun Thé ou Caffé à ce jour, essayez d&apos;en organiser un !
                </Typography>
                <Button variant="contained" size="small">
                  Créer
                </Button>
              </Box>
            )}
          </Box>
          <Divider orientation="vertical" flexItem />
          <LocalizationProvider locale={fr} dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              value={selectedDate}
              onChange={setSelectedDate}
              renderInput={params => <TextField {...params} />}
              dayOfWeekFormatter={(day: string) => `${day}.`}
              renderDay={(day: Date, selectedDays: Date[], pickersDayProps) =>
                renderDay(
                  day,
                  selectedDays,
                  pickersDayProps,
                  teaOrCoffeeMeetingsDate
                )
              }
            />
          </LocalizationProvider>
        </Stack>
      </Card>
      <Card
        sx={{
          mt: 4,
          maxWidth: '80%',
        }}>
        <TeaOrCoffeDataGrid dailyTeaOrCoffee={meetingsToday} />
      </Card>
    </Box>
  );
};

export default TeaOrCoffeeScreen;
