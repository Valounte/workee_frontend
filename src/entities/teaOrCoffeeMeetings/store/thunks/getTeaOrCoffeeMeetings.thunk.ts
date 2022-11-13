import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getTeaOrCoffeeMeetingParams,
  getTeaOrCoffeeMeetingService,
} from '@entities/teaOrCoffeeMeetings/services/getTeaOrCoffeeMeetings.service';
import { TeaOrCoffeeMeeting } from '@entities/teaOrCoffeeMeetings/TeaOrCoffeeMeeting';

export const getTeaOrCoffeeMeetingThunk = createAsyncThunk<
  TeaOrCoffeeMeeting[],
  getTeaOrCoffeeMeetingParams
>(
  '/tea-or-coffee-meeting',
  async builder => (await getTeaOrCoffeeMeetingService(builder)).data
);
