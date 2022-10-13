import { createSlice } from '@reduxjs/toolkit';

import type { Alert } from '@entities/environment-metrics/alert/Alert';
import { getCurrentTemperatureThunk } from '@entities/environment-metrics/temperature/store/thunks/getCurrentTemperature.thunk';

export interface TemperatureSlice {
  id?: number;
  alert: Alert;
  value?: number;
  createdAt?: Date;
  token?: string;
}

const initialState: TemperatureSlice = {
  id: undefined,
  alert: {
    alertLevel: "",
    recommendedTemperature: "",
    recommendationMessage: ""
  },
  value: undefined,
  createdAt: undefined,
  token: undefined,
};

export const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrentTemperatureThunk.fulfilled, (state, { payload }) => {
      state.alert = payload.alert;
      state.value = payload.value;
      state.createdAt = payload.createdAt;
    });
  },
});
