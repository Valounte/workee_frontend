import React, { memo, useMemo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import { selectTeams } from '@entities/teams/store/selectors/getTeams.selector';

import { teamDescriptionDataGridCol } from './data-grid/teamDescriptionDataGridCol';
import { teamNameDataGridCol } from './data-grid/teamNameDataGridCol';

const columns: GridColDef[] = [teamNameDataGridCol, teamDescriptionDataGridCol];

interface DataGridTeamsProps {
  loading: boolean;
  error: Error | undefined;
}

export const DataGridTeams = memo(({ loading, error }: DataGridTeamsProps) => {
  const teams = useSelector(selectTeams);
  const rows = useMemo(
    () =>
      teams.map(team => ({
        id: team.id,
        name: team.name,
        company: team.company.name,
        description: team.description,
      })),
    [teams]
  );
  return (
    <DataGrid
      loading={loading}
      error={error}
      rows={rows}
      columns={columns}
      autoHeight
      pageSize={5}
      rowsPerPageOptions={[5]}
      sx={{
        '& .MuiDataGrid-main': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      }}
    />
  );
});
