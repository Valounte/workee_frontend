import axios from 'axios';

import type { Job } from '../Job';

export interface getJobsServiceParams {
  token: string;
}
export const getJobsService = ({ token }: getJobsServiceParams) =>
  axios.get<Job[]>('api/jobs', {
    headers: {
      Authorization: `${token}`,
    },
  });
