import React, { useMemo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import { selectDailyFeedback } from '@entities/dailyFeedback/store/selectors/getDailyFeedback.selector';

import { feedbackMessageDataGridCol } from './data-grid/feedbackMessageDataGridCol';
import { feedbackUserNameDataGridCol } from './data-grid/feedbackUserNameDataGridCol';
import { feedbackValueDataGridCol } from './data-grid/feedbackValueDataGridCol';

const columns: GridColDef[] = [
  feedbackUserNameDataGridCol,
  feedbackValueDataGridCol,
  feedbackMessageDataGridCol,
];

export const DailyFeedbackDataGrid = () => {
  const feedbacksByTeam = useSelector(selectDailyFeedback);
  const feedbacks = feedbacksByTeam.map(feedback => feedback.dailyFeedback).flat();

  const rows = useMemo(
    () =>
      feedbacks.map(feedback => ({
        id: feedback?.id,
        name: feedback?.user
          ? `${feedback?.user.firstname} ${feedback.user.lastname}`
          : 'Anonyme',
        value: feedback?.satisfactionDegree,
        message: feedback?.message,
      })),
    [feedbacks]
  );
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      autoHeight
      pageSize={5}
      rowsPerPageOptions={[5]}
      sx={{
        '& .MuiDataGrid-main': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      }}
    />
  );
};
