import dateFnsFormat from 'date-fns/format';
import { fr } from 'date-fns/locale';

/* istanbul ignore file */
export const format = (
  date: Date | number,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  format: string,
  options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: number;
    useAdditionalWeekYearTokens?: boolean;
    useAdditionalDayOfYearTokens?: boolean;
  }
) => dateFnsFormat(date, format, { locale: fr, ...options });
