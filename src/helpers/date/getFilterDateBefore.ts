import { addDays } from 'date-fns';

/* istanbul ignore file */
export const getFilterDateBefore = (date: string | number | Date) => {
  const formatDate =
    typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return addDays(formatDate, 1).toDateString();
};
