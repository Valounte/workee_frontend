import axios from 'axios';

import type { Humidity } from '../Humidity';

export interface getHumidityServiceParams {
  token: string;
}
export const getHumidityService = ({ token }: getHumidityServiceParams) =>
  axios.get<Humidity[]>('api/current_humidity', {
    headers: {
      Authorization: `${token}`,
    },
  });
