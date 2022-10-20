import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Sound } from '../Sound';
import { getSoundHistoricThunk } from './thunks/getSoundHistoric.thunk';

export const soundAdapter = createEntityAdapter<Sound>({
  selectId: sound => sound.id,
});

export const soundSlice = createSlice({
  name: 'sound',
  initialState: soundAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSoundHistoricThunk.fulfilled, (state, { payload }) => {
      soundAdapter.setAll(state, payload);
    });
  },
});
