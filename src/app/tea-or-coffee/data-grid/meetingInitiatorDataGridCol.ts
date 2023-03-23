import { GridColDef } from '@mui/x-data-grid';

export const meetingInitiatorDataGridCol: GridColDef = {
  field: 'initiator',
  headerName: 'Organisé par',
  type: 'string',
  flex: 1,
};
