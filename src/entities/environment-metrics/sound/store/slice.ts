import { createSlice } from '@reduxjs/toolkit';

import { Alert } from '@entities/environment-metrics/alert/Alert';
import { getCurrentSoundThunk } from '@entities/environment-metrics/sound/store/thunks/getCurrentSound.thunk';

export interface SoundSlice {
  id?: number;
  alert?: Alert;
  value?: number;
  createdAt?: Date;
  token?: string;
}

const initialState: SoundSlice = {
  id: undefined,
  alert: undefined,
  value: undefined,
  createdAt: undefined,
  token: undefined,
};

export const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCurrentSoundThunk.fulfilled, (state, { payload }) => {
      state.id = payload.id;
    });
  },
});
