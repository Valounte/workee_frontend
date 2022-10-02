import { Team } from '@entities/teams/Team';
import { DailyFeedback } from './DailyFeedback';

export interface LastWeekDailyFeedback {
  id: number;
  averageSatisfactionDegree: number;
  dailyFeedback: DailyFeedback[];
  team: Team;
}
