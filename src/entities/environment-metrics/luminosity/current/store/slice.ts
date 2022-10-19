import { createSlice } from '@reduxjs/toolkit';

import { Alert } from '@entities/environment-metrics/alert/Alert';
import { getCurrentLuminosityThunk } from '@entities/environment-metrics/luminosity/current/store/thunks/getCurrentLuminosity.thunk';

export interface CurrentLuminositySlice {
  id?: number;
  alert: Alert;
  value?: number;
  createdAt?: Date;
  token?: string;
}

const initialState: CurrentLuminositySlice = {
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

export const currentLuminositySlice = createSlice({
  name: 'currentLuminosity',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrentLuminosityThunk.fulfilled, (state, { payload }) => {
      state.alert = payload.alert;
      state.value = payload.value;
      state.createdAt = payload.createdAt;
    });
  },
});
