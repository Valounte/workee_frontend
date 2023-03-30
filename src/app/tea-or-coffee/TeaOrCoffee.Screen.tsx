import React from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import {
  PickersDay,
  PickersDayProps,
} from '@mui/x-date-pickers/PickersDay/PickersDay';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { Box, Card, TextField, Typography } from '@ui-kit';

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
  pickersDayProps: PickersDayProps<Date>
) => {
  // remplacer par les dates qui ont des tea or cofee
  const dateArray = ['2023-04-23T16:04:48+01:00', '2023-04-27T16:04:48+01:00'];

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
          <Typography>Date</Typography>
        </Box>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={selectedDate}
            onChange={setSelectedDate}
            renderInput={params => <TextField {...params} />}
            dayOfWeekFormatter={day => `${day}.`}
            renderDay={renderDay}
          />
        </LocalizationProvider>
      </Card>
    </Box>
  );
};

export default TeaOrCoffeeScreen;
