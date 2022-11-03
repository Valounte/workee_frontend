import { GridColDef } from '@mui/x-data-grid';

export const jobIdDataGridCol: GridColDef = {
  field: 'id',
  headerName: 'ID Métier',
  headerClassName: 'super-app-theme--header',
  cellClassName: 'super-app-theme--cell',
  type: 'string',
  flex: 1,
};
