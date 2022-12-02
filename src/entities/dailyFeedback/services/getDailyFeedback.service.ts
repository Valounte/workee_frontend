import axios from 'axios';

import { LastWeekDailyFeedback } from '../LastWeekDailyFeedback';

export interface getDailyFeedbackParams {
  token: string;
}
export const getDailyFeedbackService = ({ token }: getDailyFeedbackParams) =>
  axios.get<LastWeekDailyFeedback[]>('api/teams-daily-feedback', {
    headers: {
      Authorization: `${token}`,
    },
  });
