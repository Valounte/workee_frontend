import { createSlice } from '@reduxjs/toolkit';

import { Alert } from '@entities/environment-metrics/alert/Alert';
import { getCurrentHumidityThunk } from '@entities/environment-metrics/humidity/store/thunks/getCurrentHumidity.thunk';

export interface HumiditySlice {
  id?: number;
  alert?: Alert;
  value?: number;
  createdAt?: Date;
  token?: string;
}

const initialState: HumiditySlice = {
  id: undefined,
  alert: undefined,
  value: undefined,
  createdAt: undefined,
  token: undefined,
};

export const humiditySlice = createSlice({
  name: 'humidity',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrentHumidityThunk.fulfilled, (state, { payload }) => {
      state.id = payload.id;
    });
  },
});
