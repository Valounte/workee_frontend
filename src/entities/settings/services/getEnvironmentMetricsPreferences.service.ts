import axios from 'axios';

import { EnvironmentMetricsPreferences } from '../EnvironmentMetricsPreferences';

export interface getEnvironmentMetricsPreferencesParams {
  token: string;
}

export const getEnvironmentMetricsPreferencesService = ({
  token,
}: getEnvironmentMetricsPreferencesParams) =>
  axios.get<EnvironmentMetricsPreferences[]>('api/environment-metrics-preferences', {
    headers: {
      Authorization: `${token}`,
    },
  });
