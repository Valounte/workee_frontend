import dateFnsIsMatch from 'date-fns/isMatch';
import { fr } from 'date-fns/locale';

/* istanbul ignore file */
export const isMatch = (
  date: string,
  format: string,
  options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    useAdditionalWeekYearTokens?: boolean;
    useAdditionalDayOfYearTokens?: boolean;
  }
) => dateFnsIsMatch(date, format, { locale: fr, ...options });
