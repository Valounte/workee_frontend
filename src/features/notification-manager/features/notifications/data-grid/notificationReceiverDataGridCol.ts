import { GridColDef } from '@mui/x-data-grid';

export const notificationReceiverDataGridCol: GridColDef = {
  field: 'receiver_id',
  headerName: 'Personne notifiée',
  type: 'string',
  flex: 1,
};
