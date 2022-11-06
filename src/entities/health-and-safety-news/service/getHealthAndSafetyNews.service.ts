import axios from 'axios';

import type { HealthAndSafetyNews } from '../HealthAndSafetyNews';

export interface getHealthAndSafetyServiceParams {
  token: string;
}

export const getHealthAndSafetyNewsService = ({
  token,
}: getHealthAndSafetyServiceParams) =>
  axios.get<HealthAndSafetyNews[]>('api/news', {
    headers: {
      Authorization: `${token}`,
    },
  });
