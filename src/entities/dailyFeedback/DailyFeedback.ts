import type { User } from '../users/User';

export interface DailyFeedback {
  id: number;
  satisfactionDegree: number;
  message: string;
  user?: User;
}
