import axios from 'axios';

export interface addGoalServiceParams {
  token: string;
  goal: string;
  startDate: Date;
  endDate: Date;
  userId?: number;
}

export interface addGoalServiceReturn {
  message: string;
}

export const addGoalService = ({
  token,
  goal,
  startDate,
  endDate,
  userId,
}: addGoalServiceParams) =>
  axios.post<addGoalServiceReturn>(
    'api/professional-development-goal',
    { goal, startDate, endDate, userId },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
