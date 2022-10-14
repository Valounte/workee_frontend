import axios from 'axios';

import type { Temperature } from '@entities/environment-metrics/temperature/Temperature';

export interface getTemperaturesHistoricServiceParams {
  token: string;
}
export const getTemperaturesHistoricService = ({
  token,
}: getTemperaturesHistoricServiceParams) =>
  axios.get<Temperature[]>('api/temperature_historic', {
    headers: {
      Authorization: `${token}`,
    },
  });
