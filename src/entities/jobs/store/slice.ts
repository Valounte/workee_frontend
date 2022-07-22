import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import type { Job } from '../Job';
import { getJobsThunk } from './thunks/getAllJobs.thunk';

export const jobsAdapter = createEntityAdapter<Job>({
  selectId: job => job.id,
});

export const jobSlice = createSlice({
  name: 'jobs',
  initialState: jobsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getJobsThunk.fulfilled, (state, { payload }) => {
      jobsAdapter.setAll(state, payload);
    });
  },
});
