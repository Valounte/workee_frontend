import dateFnsFormatDistance from 'date-fns/formatDistance';
import { fr } from 'date-fns/locale';

/**
 * Distance between two date in understandable for humans
 * @param date
 * @param baseDate
 * @param options
 */
/* istanbul ignore file */
export const formatDistance = (
  date: Date | number,
  baseDate: Date | number,
  options?: {
    includeSeconds?: boolean;
    addSuffix?: boolean;
  }
) =>
  dateFnsFormatDistance(date, baseDate, {
    locale: fr,
    ...options,
  });
