import axios from 'axios';

import type { Sound } from '@entities/environment-metrics/sound/Sound';

export interface getCurrentSoundServiceParams {
  token: string;
}
export const getCurrentSoundService = ({
  token,
}: getCurrentSoundServiceParams) =>
  axios.get<Sound>('api/current_sound', {
    headers: {
      Authorization: `${token}`,
    },
  });
