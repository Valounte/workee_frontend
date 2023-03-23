import React from 'react';

import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { addMinutes, format } from 'date-fns';
import { BiTimeFive } from 'react-icons/bi';

import { Stack, Typography } from '@ui-kit';

export const meetingTocDataGridCol: GridColDef = {
  field: 'toc',
  headerName: 'Thé ou Café',
  type: 'string',
  width: 350,
  renderCell: (
    params: GridRenderCellParams<{ name: string; date: string }, any, any>
  ) => (
    <div>
      {params.value && (
        <Stack direction="column" spacing={1}>
          <Typography variant="body1" fontWeight={500}>
            {params.value.name}
          </Typography>
          <Stack direction="row" spacing={1}>
            <BiTimeFive fontSize="medium" />
            <Typography>
              {format(new Date(params.value.date), 'H:mm')} -{' '}
              {format(addMinutes(new Date(params.value.date), 15), 'H:mm')}
            </Typography>
          </Stack>
        </Stack>
      )}
    </div>
  ),
};
