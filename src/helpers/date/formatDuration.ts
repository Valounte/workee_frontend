import dateFnsFormatDuration from 'date-fns/formatDuration';
import { fr } from 'date-fns/locale';

/**
 * Return human-readable duration string i.e. "9 months 2 days"
 * @param duration
 * @param options
 */
/* istanbul ignore file */
export const formatDuration = (
  duration: Duration,
  options?: {
    delimiter?: string;
    zero?: boolean;
    format?: string[];
  }
) =>
  dateFnsFormatDuration(duration, {
    locale: fr,
    format: ['years', 'months', 'weeks', 'days', 'hours'],
    ...options,
  });
