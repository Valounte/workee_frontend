import { GridColDef } from '@mui/x-data-grid';

export const teamDescriptionDataGridCol: GridColDef = {
  field: 'description',
  headerName: "Description de l'équipe",
  headerClassName: 'super-app-theme--header',
  cellClassName: 'super-app-theme--cell',
  type: 'string',
  flex: 2,
};
