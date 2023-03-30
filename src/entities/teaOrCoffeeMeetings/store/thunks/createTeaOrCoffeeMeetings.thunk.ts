import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  createTeaOrCoffeeMeetingParams,
  createTeaOrCoffeeMeetingService,
} from '@entities/teaOrCoffeeMeetings/services/createTeaOrCoffeMeetings.service';
import { TeaOrCoffeeMeeting } from '@entities/teaOrCoffeeMeetings/TeaOrCoffeeMeeting';

export const createTeaOrCoffeeMeetingThunk = createAsyncThunk<
  TeaOrCoffeeMeeting,
  createTeaOrCoffeeMeetingParams
>(
  'create/tea-or-coffee-meeting',
  async builder =>
    (await createTeaOrCoffeeMeetingService(builder)).data.teaOrCoffeeMeeting
);
