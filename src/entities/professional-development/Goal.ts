import { SubGoal } from './SubGoal';

export interface Goal {
  id: number;
  goal: string;
  progression: number;
  startDate: Date;
  endDate: Date;
  subGoals: SubGoal[];
}
