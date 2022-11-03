import axios from 'axios';

import type { Job } from '../Job';

export interface CreateJobServiceParams {
  token: string;
  name: string;
  description: string;
}

export interface CreateJobServiceReturn {
  message: string;
  job: Job;
}

export const createJobService = ({ token, name, description }: CreateJobServiceParams) =>
  axios.post<CreateJobServiceReturn>(
    'api/job',
    { name, description },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
