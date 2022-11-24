import React, { memo, useMemo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

import { selectNotifications } from '@entities/notifications/store/selectors/getNotifications.selector';

import { notificationDateDataGridCol } from './data-grid/notificationDateDataGridCol';
import { notificationIdDataGridCol } from './data-grid/notificationIdDataGridCol';
import { notificationMessageDataGridCol } from './data-grid/notificationMessageDataGridCol';
import { notificationSenderDataGridCol } from './data-grid/notificationSenderDataGridCol';

const columns: GridColDef[] = [
  notificationIdDataGridCol,
  notificationMessageDataGridCol,
  notificationSenderDataGridCol,
  notificationDateDataGridCol,
];

interface DataGridNotificationsProps {
  loading: boolean;
  error: Error | undefined;
}

export const DataGridNotifications = memo(
  ({ loading, error }: DataGridNotificationsProps) => {
    const notifications = useSelector(selectNotifications);
    const rows = useMemo(
      () =>
        notifications.map(notification => ({
          id: notification.id,
          message: notification.message,
          senderFirstname: notification.senderFirstname,
          sentAt: notification.sentAt,
        })),
      [notifications]
    );
    return (
      <DataGrid
        loading={loading}
        error={error}
        rows={rows}
        columns={columns}
        autoHeight
        pageSize={15}
        rowsPerPageOptions={[15]}
      />
    );
  }
);
