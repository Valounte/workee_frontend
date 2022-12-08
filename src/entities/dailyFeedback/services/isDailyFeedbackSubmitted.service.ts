import axios from 'axios';

export interface isDailyFeedbackSubmittedParams {
  token: string;
}
export const isDailyFeedbackSubmittedService = ({
  token,
}: isDailyFeedbackSubmittedParams) =>
  axios.get<boolean>('api/is-daily-feedback-submitted', {
    headers: {
      Authorization: `${token}`,
    },
  });
