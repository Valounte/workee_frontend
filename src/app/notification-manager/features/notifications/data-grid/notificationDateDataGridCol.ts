import { GridColDef } from '@mui/x-data-grid';

export const notificationDateDataGridCol: GridColDef = {
  field: 'sentAt',
  headerName: 'Date de création',
  type: 'dateTime',
  flex: 1,
};
