import { createSlice } from '@reduxjs/toolkit';

import { Alert } from '@entities/environment-metrics/alert/Alert';
import { getCurrentHumidityThunk } from '@entities/environment-metrics/humidity/current/store/thunks/getCurrentHumidity.thunk';

export interface CurrentHumiditySlice {
  id?: number;
  alert: Alert;
  value?: number;
  createdAt?: Date;
  token?: string;
}

const initialState: CurrentHumiditySlice = {
  id: undefined,
  alert: {
    alertLevel: '',
    recommendedValue: '',
    recommendationMessage: '',
  },
  value: undefined,
  createdAt: undefined,
  token: undefined,
};

export const currentHumiditySlice = createSlice({
  name: 'currentHumidity',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrentHumidityThunk.fulfilled, (state, { payload }) => {
      state.alert = payload.alert;
      state.value = payload.value;
      state.createdAt = payload.createdAt;
    });
  },
});
