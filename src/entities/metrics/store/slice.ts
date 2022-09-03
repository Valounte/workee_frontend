import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import type { Humidity } from '../Humidity';
import { getHumidityThunk } from './thunks/getHumidity.thunk';

export const humidityAdapter = createEntityAdapter<Humidity>({
  selectId: humidity => humidity.id,
});

export const humiditySlice = createSlice({
  name: 'humidity',
  initialState: humidityAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getHumidityThunk.fulfilled, (state, { payload }) => {
      humidityAdapter.setAll(state, payload);
    });
  },
});