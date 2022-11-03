import { GridColDef } from '@mui/x-data-grid';

export const jobDescriptionDataGridCol: GridColDef = {
  field: 'description',
  headerName: 'Description du métier',
  headerClassName: 'super-app-theme--header',
  cellClassName: 'super-app-theme--cell',
  type: 'string',
  flex: 2,
};
