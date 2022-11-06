import axios from 'axios';

export interface ChangeEnvironmentMetricsPreferenceParams {
  token: string;
  metricType: string;
  isDesactivated: boolean;
}

export interface ChangeEnvironmentMetricsPreferenceReturn {
  message: string;
}

export const changeEnvironmentMetricsPreference = ({
  token,
  metricType,
  isDesactivated,
}: ChangeEnvironmentMetricsPreferenceParams) =>
  axios.put<ChangeEnvironmentMetricsPreferenceReturn>(
    'api/environment-metrics-preference',
    { metricType, isDesactivated },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
