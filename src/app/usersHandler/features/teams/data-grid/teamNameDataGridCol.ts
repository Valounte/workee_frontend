import { GridColDef } from '@mui/x-data-grid';

export const teamNameDataGridCol: GridColDef = {
  field: 'name',
  headerName: "Nom de l'Equipe",
  type: 'string',
  headerClassName: 'super-app-theme--header',
  cellClassName: 'super-app-theme--cell',
  flex: 1,
};
