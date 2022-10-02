import React, { memo, useMemo } from 'react';

import { useSelector } from 'react-redux';

import { DataGrid } from '@mui/x-data-grid';

import { selectDailyFeedback } from '@entities/dailyFeedback/store/selectors/getDailyFeedback.selector';

interface DailyFeedbackDataGridProps {
  loading: boolean;
  error: Error | undefined;
}

export const DailyFeedbackDataGrid = memo(({ loading, error }: DailyFeedbackDataGridProps) => {

  const lastWeekDailyFeedback = useSelector(selectDailyFeedback);
  console.log('lastWeekDailyFeedback', lastWeekDailyFeedback.dailyFeedback);
  return (
    <p>coucou</p>
    
  );
});
