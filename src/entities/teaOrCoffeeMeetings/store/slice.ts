import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { TeaOrCoffeeMeeting } from '../TeaOrCoffeeMeeting';
import { createTeaOrCoffeeMeetingThunk } from './thunks/createTeaOrCoffeeMeetings.thunk';
import { getTeaOrCoffeeMeetingThunk } from './thunks/getTeaOrCoffeeMeetings.thunk';

export const teaOrCoffeeMeetingAdapter = createEntityAdapter<TeaOrCoffeeMeeting>({
  selectId: teaOrCoffeeMeeting => teaOrCoffeeMeeting.id,
});

export const teaOrCoffeeMeetingSlice = createSlice({
  name: 'teaOrCoffeeMeeting',
  initialState: teaOrCoffeeMeetingAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTeaOrCoffeeMeetingThunk.fulfilled, (state, { payload }) => {
      teaOrCoffeeMeetingAdapter.setAll(state, payload);
    });
    builder.addCase(
      createTeaOrCoffeeMeetingThunk.fulfilled,
      (state, { payload }) => {
        teaOrCoffeeMeetingAdapter.addOne(state, payload);
      }
    );
  },
});
