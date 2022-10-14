import { createSlice } from '@reduxjs/toolkit';

import { getCurrentTemperatureThunk } from '@entities/environment-metrics/temperature/current/store/thunks/getCurrentTemperature.thunk';

import { Temperature } from '../../Temperature';

export interface CurrentTemperatureSlice {
  temperature?: Temperature;
  token?: string;
}

const initialState: CurrentTemperatureSlice = {
  temperature: undefined,
  token: undefined,
};

export const currentTemperatureSlice = createSlice({
  name: 'currentTemperature',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrentTemperatureThunk.fulfilled, (state, { payload }) => {
      state.temperature = payload;
    });
  },
});
