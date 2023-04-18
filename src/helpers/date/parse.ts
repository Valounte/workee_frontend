import { fr } from 'date-fns/locale';
import dateFnsParse from 'date-fns/parse';

export const parseDate = (
  dateString: string,
  formatString: string,
  options?: {
    useAdditionalDayOfYearTokens?: boolean;
    useAdditionalWeekYearTokens?: boolean;
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }
) => dateFnsParse(dateString, formatString, new Date(), { locale: fr, ...options });
