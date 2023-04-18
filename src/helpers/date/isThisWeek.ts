import dateFnsIsThisWeek from 'date-fns/isThisWeek';
import { fr } from 'date-fns/locale';

/* istanbul ignore file */
export const isThisWeek = (
  date: Date | number,
  options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }
) => dateFnsIsThisWeek(date, { locale: fr, ...options });
