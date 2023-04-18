import { startOfDay } from 'date-fns';

/* istanbul ignore file */
export const getFilterDateAfter = (date: string | Date | number) => {
  const formatDate =
    typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return startOfDay(formatDate).toDateString();
};
