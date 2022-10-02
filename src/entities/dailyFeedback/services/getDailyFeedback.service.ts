import axios from 'axios';
import { LastWeekDailyFeedback } from '../LastWeekDailyFeedback';

export interface getDailyFeedbackParams {
  token: string;
  teamId: number;
}
export const getDailyFeedbackService = ({ token, teamId }: getDailyFeedbackParams) =>
  axios.get<LastWeekDailyFeedback>('api/last-week-daily-feedback/' + String(teamId), {
    headers: {
      Authorization: `${token}`,
    },
  });
