import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Job } from '../../Job';
import { getJobsService } from '../../services/getAllJobs.service';
import type { getJobsServiceParams } from '../../services/getAllJobs.service';

export const getJobsThunk = createAsyncThunk<Job[], getJobsServiceParams>(
  '/jobs',
  async builder => (await getJobsService(builder)).data
);
