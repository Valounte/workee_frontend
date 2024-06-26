import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { createJobThunk } from './thunks/createJob.thunk';
import { getJobsThunk } from './thunks/getJobs.thunk';
import type { Job } from '../Job';

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
    builder.addCase(createJobThunk.fulfilled, (state, { payload }) => {
      jobsAdapter.addOne(state, payload);
    });
  },
});
