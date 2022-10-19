import axios from 'axios';

import type { Humidity } from '@entities/environment-metrics/humidity/Humidity';

export interface getHumidityHistoricServiceParams {
  token: string;
}
export const getHumidityHistoricService = ({
  token,
}: getHumidityHistoricServiceParams) =>
  axios.get<Humidity[]>('api/humidity_historic', {
    headers: {
      Authorization: `${token}`,
    },
  });
