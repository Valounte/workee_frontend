import axios from 'axios';

import type { Luminosity } from '@entities/environment-metrics/luminosity/Luminosity';

export interface getLuminosityHistoricServiceParams {
  token: string;
}
export const getLuminosityHistoricService = ({
  token,
}: getLuminosityHistoricServiceParams) =>
  axios.get<Luminosity[]>('api/luminosity_historic', {
    headers: {
      Authorization: `${token}`,
    },
  });
