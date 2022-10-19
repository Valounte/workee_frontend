import axios from 'axios';

import type { Sound } from '@entities/environment-metrics/sound/Sound';

export interface getSoundHistoricServiceParams {
  token: string;
}
export const getSoundHistoricService = ({ token }: getSoundHistoricServiceParams) =>
  axios.get<Sound[]>('api/sound_historic', {
    headers: {
      Authorization: `${token}`,
    },
  });
