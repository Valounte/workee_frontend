import React, { memo, useMemo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import { selectUsers } from '@entities/users/store/selectors/getUsers.selector';

import { userEmailDataGridCol } from './data-grid/userEmailDataGridCol';
import { userFirstnameDataGridCol } from './data-grid/userFirstnameDataGridCol';
import { userJobDataGridCol } from './data-grid/userJobDataGridCol';
import { userLastnameDataGridCol } from './data-grid/userLastnameDataGridCol';
import { userTeamsDataGridCol } from './data-grid/userTeamsDataGridCol';

const columns: GridColDef[] = [
  userLastnameDataGridCol,
  userFirstnameDataGridCol,
  userEmailDataGridCol,
  userJobDataGridCol,
  userTeamsDataGridCol,
];

interface DataGridUsersProps {
  loading: boolean;
  error: Error | undefined;
}

export const DataGridUsers = memo(({ loading, error }: DataGridUsersProps) => {
  const users = useSelector(selectUsers);
  const rows = useMemo(
    () =>
      users.map(user => ({
        id: user.id,
        email: user.email,
        lastname: user.lastname,
        firstname: user.firstname,
        job: user.job.name,
        teams: user.teams,
      })),
    [users]
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
