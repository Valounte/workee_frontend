import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Job } from '@entities/jobs/Job';
import {
  createJobService,
  CreateJobServiceParams,
} from '@entities/jobs/services/createJob.service';

export const createJobThunk = createAsyncThunk<Job, CreateJobServiceParams>(
  'post/job',
  async builder => (await createJobService(builder)).data.job
);
