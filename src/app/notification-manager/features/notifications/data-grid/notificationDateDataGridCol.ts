import { GridColDef } from '@mui/x-data-grid';

export const notificationDateDataGridCol: GridColDef = {
  field: 'sentAt',
  headerName: "Date d'envoie",
  type: 'dateTime',
  flex: 1,
};
