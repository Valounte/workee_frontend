import React, { useMemo, memo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { TeaOrCoffeeMeeting } from '@entities/teaOrCoffeeMeetings/TeaOrCoffeeMeeting';
import { Box, Typography } from '@ui-kit';

import { meetingInitiatorDataGridCol } from './data-grid/meetingInitiatorDataGridCol';
import { meetingParticipantDataGridCol } from './data-grid/meetingParticipantDataGridCol';
import { meetingTocDataGridCol } from './data-grid/meetingTocDataGridCol';
import { meetingTypeDataGridCol } from './data-grid/meetingTypeDataGridCol';

const NoDataGrid = () => (
  <Box
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}>
    <Typography>
      Aucun Thé ou Café à ce jour, essayez d&apos;en organiser un !
    </Typography>
  </Box>
);

const columns: GridColDef[] = [
  meetingTocDataGridCol,
  meetingTypeDataGridCol,
  meetingParticipantDataGridCol,
  meetingInitiatorDataGridCol,
];

interface TeaOrCoffeDataGridProps {
  dailyTeaOrCoffee: TeaOrCoffeeMeeting[];
}

export const TeaOrCoffeDataGrid = memo((props: TeaOrCoffeDataGridProps) => {
  const { dailyTeaOrCoffee } = props;

  const rows = useMemo(
    () =>
      dailyTeaOrCoffee.map(meeting => ({
        id: meeting.id,
        toc: { name: meeting.name, date: meeting.date },
        type: meeting.meetingType,
        participant: meeting.invitedUsersStatus,
        initiator: `${meeting.initiator.firstname} ${meeting.initiator.lastname}`,
      })),
    [dailyTeaOrCoffee]
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
      components={{
        NoRowsOverlay: NoDataGrid,
      }}
    />
  );
});
