import { createSlice } from '@reduxjs/toolkit';

import { Alert } from '@entities/environment-metrics/alert/Alert';
import { getCurrentLuminosityThunk } from '@entities/environment-metrics/luminosity/store/thunks/getCurrentLuminosity.thunk';

export interface LuminositySlice {
  id?: number;
  alert?: Alert;
  value?: number;
  createdAt?: Date;
  token?: string;
}

const initialState: LuminositySlice = {
  id: undefined,
  alert: undefined,
  value: undefined,
  createdAt: undefined,
  token: undefined,
};

export const luminositySlice = createSlice({
  name: 'luminosity',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrentLuminosityThunk.fulfilled, (state, { payload }) => {
      state.id = payload.id;
    });
  },
});
