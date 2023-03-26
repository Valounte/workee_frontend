import axios from 'axios';

export interface addGoalServiceParams {
    token: string;
    goal: string;
    startDate: Date;
    endDate: Date;
}

export interface addGoalServiceReturn {
  message: string;
}

export const addGoalService = ({
  token,
  goal,
  startDate,
  endDate,
}: addGoalServiceParams) =>
  axios.post<addGoalServiceReturn>(
    'api/professional-development-goal',
    { goal, startDate, endDate },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
