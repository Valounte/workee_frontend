import axios from 'axios';

import type { Temperature } from '@entities/environment-metrics/temperature/Temperature';

export interface getCurrentTemperatureServiceParams {
  token: string;
}
export const getCurrentTemperatureService = ({
  token,
}: getCurrentTemperatureServiceParams) =>
  axios.get<Temperature>('api/current_temperature', {
    headers: {
      Authorization: `${token}`,
    },
  });
