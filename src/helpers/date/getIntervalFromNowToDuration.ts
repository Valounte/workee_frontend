import dateFnsIntervalToDuration from 'date-fns/intervalToDuration';

const now = new Date();

/* istanbul ignore file */
export const getIntervalFromNowToDuration = (start: Date) =>
  dateFnsIntervalToDuration({ start, end: now });
