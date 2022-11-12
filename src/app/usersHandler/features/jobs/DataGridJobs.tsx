import React, { memo, useMemo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import { selectJobs } from '@entities/jobs/store/selectors/getJobs.selector';

import { jobDescriptionDataGridCol } from './data-grid/jobDescriptionDataGridCol';
import { jobNameDataGridCol } from './data-grid/jobNameDataGridCol';

const columns: GridColDef[] = [jobNameDataGridCol, jobDescriptionDataGridCol];

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
        description: job.description,
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
