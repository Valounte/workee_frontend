import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { HealthAndSafetyNews } from '../HealthAndSafetyNews';
import { getHealthAndSafetyNewsThunk } from './thunks/getHealthAndSafetyNews.thunk';

export const healthAndSafetyNewsAdapter = createEntityAdapter<HealthAndSafetyNews>({
  selectId: healthAndSafetyNews => healthAndSafetyNews.title,
});

export const HealthAndSafetyNewsSlice = createSlice({
  name: 'healthAndSafetyNews',
  initialState: healthAndSafetyNewsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getHealthAndSafetyNewsThunk.fulfilled, (state, { payload }) => {
      healthAndSafetyNewsAdapter.setAll(state, payload);
    });
  },
});
