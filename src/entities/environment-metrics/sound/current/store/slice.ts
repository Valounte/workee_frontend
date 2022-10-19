import { createSlice } from '@reduxjs/toolkit';

import { Alert } from '@entities/environment-metrics/alert/Alert';
import { getCurrentSoundThunk } from '@entities/environment-metrics/sound/current/store/thunks/getCurrentSound.thunk';

export interface CurrentSoundSlice {
  id?: number;
  alert: Alert;
  value?: number;
  createdAt?: Date;
  token?: string;
}

const initialState: CurrentSoundSlice = {
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

export const currentSoundSlice = createSlice({
  name: 'currentSound',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrentSoundThunk.fulfilled, (state, { payload }) => {
      state.alert = payload.alert;
      state.value = payload.value;
      state.createdAt = payload.createdAt;
    });
  },
});
