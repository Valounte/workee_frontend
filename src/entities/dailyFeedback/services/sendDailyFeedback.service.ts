import axios from 'axios';

export interface sendDailyFeedbackParams {
  token: string;
  satisfactionDegree: number;
  isAnonymous: boolean;
  message: string;
}

export interface sendDailyFeedbackReturned {
  message: string;
}

export const sendDailyFeedbackService = ({
  token,
  satisfactionDegree,
  isAnonymous,
  message,
}: sendDailyFeedbackParams) =>
  axios.post<sendDailyFeedbackReturned>(
    'api/submit-daily-feedback',
    {
      satisfactionDegree,
      isAnonymous,
      message,
    },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
