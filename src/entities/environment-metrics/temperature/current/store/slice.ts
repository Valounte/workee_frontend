import { createSlice } from '@reduxjs/toolkit';

import { Alert } from '@entities/environment-metrics/alert/Alert';
import { getCurrentTemperatureThunk } from '@entities/environment-metrics/temperature/current/store/thunks/getCurrentTemperature.thunk';

export interface CurrentTemperatureSlice {
  id?: number;
  alert: Alert;
  value?: number;
  createdAt?: Date;
  token?: string;
}

const initialState: CurrentTemperatureSlice = {
  id: undefined,
  alert: {
    alertLevel: "",
    recommendedValue: "",
    recommendationMessage: ""
  },
  value: undefined,
  createdAt: undefined,
  token: undefined,
};

export const currentTemperatureSlice = createSlice({
  name: 'currentTemperature',
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
