import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Luminosity } from '../Luminosity';
import { getLuminosityHistoricThunk } from './thunks/getLuminosityHistoric.thunk';

export const luminosityAdapter = createEntityAdapter<Luminosity>({
  selectId: luminosity => luminosity.id,
});

export const luminositySlice = createSlice({
  name: 'luminosity',
  initialState: luminosityAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLuminosityHistoricThunk.fulfilled, (state, { payload }) => {
      luminosityAdapter.setAll(state, payload);
    });
  },
});
