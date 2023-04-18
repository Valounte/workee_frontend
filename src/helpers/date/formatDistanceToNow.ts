import dateFnsFormatDistanceToNow from 'date-fns/formatDistanceToNow';
import { fr } from 'date-fns/locale';

/* istanbul ignore file */
export const formatDistanceToNow = (
  date: Date | number,
  options?: {
    includeSeconds?: boolean;
    addSuffix?: boolean;
    locale?: Locale;
  }
) => dateFnsFormatDistanceToNow(date, { locale: fr, ...options });
