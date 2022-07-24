import React, { memo, useMemo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import { selectJobs } from '@entities/jobs/store/selectors/getJobs.selector';

import { jobCompanyDataGridCol } from './data-grid/jobCompanyDataGridCol';
import { jobIdDataGridCol } from './data-grid/jobIdDataGridCol';
import { jobNameDataGridCol } from './data-grid/jobNameDataGridCol';

const columns: GridColDef[] = [
  jobIdDataGridCol,
  jobNameDataGridCol,
  jobCompanyDataGridCol,
];

interface DataGridJobsProps {
  loading: boolean;
  error: Error | undefined;
}

export const DataGridJobs = memo(({ loading, error }: DataGridJobsProps) => {
  const jobs = useSelector(selectJobs);
  const rows = useMemo(
    () =>
      jobs.map(job => ({
        id: job.id,
        name: job.name,
        company: job.company.name,
      })),
    [jobs]
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
