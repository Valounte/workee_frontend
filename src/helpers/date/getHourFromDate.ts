import { format } from './format';

/* istanbul ignore file */
export const getHourFromDate = (date: Date | string) =>
  format(new Date(date), 'HH:mm');
