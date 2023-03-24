import React from 'react';

import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { Team } from '@entities/teams/Team';
import { Chip } from '@ui-kit';

export const userTeamsDataGridCol: GridColDef = {
  field: 'teams',
  headerName: 'Équipes',
  type: 'string',
  renderCell: (params: GridRenderCellParams<Team[], any, any>) => (
    <div>
      {params.value && (
        <>
          {params.value.map(team => (
            <Chip label={team.name} variant="outlined" color="secondary" />
          ))}
        </>
      )}
    </div>
  ),
  flex: 2,
};
