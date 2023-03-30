import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { getHumidityHistoricThunk } from './thunks/getHumidityHistoric.thunk';
import { Humidity } from '../Humidity';

export const humidityAdapter = createEntityAdapter<Humidity>({
  selectId: humidity => humidity.id,
});

export const humiditySlice = createSlice({
  name: 'humidity',
  initialState: humidityAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getHumidityHistoricThunk.fulfilled, (state, { payload }) => {
      humidityAdapter.setAll(state, payload);
    });
  },
});
