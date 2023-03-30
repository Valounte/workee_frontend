import React from 'react';

import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { Chip } from '@ui-kit';

export const meetingTypeDataGridCol: GridColDef = {
  field: 'type',
  headerName: 'Type de rendez-vous',
  type: 'string',
  width: 230,
  renderCell: (params: GridRenderCellParams<string, any, any>) => (
    <div>{params.value && <Chip label={params.value} />}</div>
  ),
};
