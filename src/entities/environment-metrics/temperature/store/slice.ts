import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Temperature } from '../Temperature';
import { getTemperaturesHistoricThunk } from './thunks/getTemperaturesHistoric.thunk';

export const temperaturesAdapter = createEntityAdapter<Temperature>({
  selectId: temperature => temperature.id,
});

export const temperatureSlice = createSlice({
  name: 'temperature',
  initialState: temperaturesAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTemperaturesHistoricThunk.fulfilled, (state, { payload }) => {
      temperaturesAdapter.setAll(state, payload);
    });
  },
});
