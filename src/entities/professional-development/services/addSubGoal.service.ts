import axios from 'axios';

import { SubGoal } from '../SubGoal';

export interface addSubGoalServiceParams {
  token: string;
  goalId: number;
  subGoal: string;
}

export interface addSubGoalServiceReturn {
  subGoal: SubGoal;
}

export const addSubGoalService = ({
  token,
  goalId,
  subGoal,
}: addSubGoalServiceParams) =>
  axios.post<addSubGoalServiceReturn>(
    'api/professional-development-sub-goal',
    { goalId, subGoal },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
