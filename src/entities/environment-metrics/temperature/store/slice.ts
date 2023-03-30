import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { getTemperaturesHistoricThunk } from './thunks/getTemperaturesHistoric.thunk';
import { Temperature } from '../Temperature';

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
