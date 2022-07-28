import React, { memo, useMemo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import { selectTeams } from '@entities/teams/store/selectors/getTeams.selector';

import { teamCompanyDataGridCol } from './data-grid/teamCompanyDataGridCol';
import { teamIdDataGridCol } from './data-grid/teamIdDataGridCol';
import { teamNameDataGridCol } from './data-grid/teamNameDataGridCol';

const columns: GridColDef[] = [
  teamIdDataGridCol,
  teamNameDataGridCol,
  teamCompanyDataGridCol,
];

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
    />
  );
});
