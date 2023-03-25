import axios from 'axios';

import { SubGoal } from '../SubGoal';

export interface editSubGoalServiceParams {
  token: string;
  subGoalId: number;
  status: string;
  subGoal: string;
}

export interface editSubGoalServiceReturn {
  subGoal: SubGoal;
}

export const editSubGoalService = ({
  token,
  subGoalId,
  status,
  subGoal,
}: editSubGoalServiceParams) =>
  axios.put<editSubGoalServiceReturn>(
    'api/professional-development-sub-goal',
    { subGoalId, status, subGoal },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
