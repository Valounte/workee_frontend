import axios from 'axios';

import type { Luminosity } from '@entities/environment-metrics/luminosity/Luminosity';

export interface getCurrentLuminosityServiceParams {
  token: string;
}
export const getCurrentLuminosityService = ({
  token,
}: getCurrentLuminosityServiceParams) =>
  axios.get<Luminosity>('api/current_luminosity', {
    headers: {
      Authorization: `${token}`,
    },
  });
