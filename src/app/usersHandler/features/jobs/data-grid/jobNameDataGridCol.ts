import { GridColDef } from '@mui/x-data-grid';

export const jobNameDataGridCol: GridColDef = {
  field: 'name',
  headerName: 'Nom du Métier',
  headerClassName: 'super-app-theme--header',
  cellClassName: 'super-app-theme--cell',
  type: 'string',
  flex: 1,
};
