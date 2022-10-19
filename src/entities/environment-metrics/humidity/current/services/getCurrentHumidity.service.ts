import axios from 'axios';

import type { Humidity } from '@entities/environment-metrics/humidity/Humidity';

export interface getCurrentHumidityServiceParams {
  token: string;
}
export const getCurrentHumidityService = ({
  token,
}: getCurrentHumidityServiceParams) =>
  axios.get<Humidity>('api/current_humidity', {
    headers: {
      Authorization: `${token}`,
    },
  });
