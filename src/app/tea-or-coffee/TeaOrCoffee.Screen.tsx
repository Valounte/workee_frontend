import React from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import {
  PickersDay,
  PickersDayProps,
} from '@mui/x-date-pickers/PickersDay/PickersDay';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';

import { Box, Card, LinearProgress, TextField, Typography } from '@ui-kit';

import { selectToken } from '../../entities/authentification/store/selectors/selectToken.selector';
import { selectTeaOrCoffeeMeetings } from '../../entities/teaOrCoffeeMeetings/store/selector/getTeaOrCoffeeMeetings.selector';
import { getTeaOrCoffeeMeetingThunk } from '../../entities/teaOrCoffeeMeetings/store/thunks/getTeaOrCoffeeMeetings.thunk';
import { useAppDispatch } from '../../store/useAppDispatch';

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
  console.log(meetingsToday);

  return (
    <Box maxWidth="100%" pt={2}>
      <Typography variant="h4">Thé ou café</Typography>
      <Typography variant="subtitle1">
        Discussion autour d&apos;un café ? A moins que vous soyez plus thé ?
      </Typography>
      <Card
        sx={{
          maxWidth: 600,
        }}>
        <Box>
          <Typography>
            {selectedDate && format(selectedDate, 'dd/MM/yyyy')}
          </Typography>
          {meetingsToday.length > 0 ? (
            <>
              <Typography> {meetingsToday[0].name}</Typography>
              <Typography>
                {format(new Date(meetingsToday[0].date), 'dd/mm/yyyy')}
              </Typography>
              <Typography>
                {meetingsToday[0].initiator.firstname}{' '}
                {meetingsToday[0].initiator.lastname} te propose un thé ou un café ce
                jour. Tu peux accompagner ta boisson avec la viennoiserie de ton
                choix !
              </Typography>
            </>
          ) : (
            <Typography>No meeting</Typography>
          )}
        </Box>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={selectedDate}
            onChange={setSelectedDate}
            renderInput={params => <TextField {...params} />}
            dayOfWeekFormatter={(day: string) => `${day}.`}
            renderDay={(day: Date, selectedDays: Date[], pickersDayProps) =>
              renderDay(day, selectedDays, pickersDayProps, teaOrCoffeeMeetingsDate)
            }
          />
        </LocalizationProvider>
      </Card>
    </Box>
  );
};

export default TeaOrCoffeeScreen;
