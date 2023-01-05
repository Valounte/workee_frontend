import React, { memo, useMemo } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useSelector } from 'react-redux';

import { selectNotifications } from '@entities/notifications/store/selectors/getNotifications.selector';

import { notificationDateDataGridCol } from './data-grid/notificationDateDataGridCol';
import { notificationMessageDataGridCol } from './data-grid/notificationMessageDataGridCol';
import { notificationSenderDataGridCol } from './data-grid/notificationSenderDataGridCol';

const columns: GridColDef[] = [
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
          senderFirstname: `${notification.senderFirstname} ${notification.senderLastname}`,
          sentAt: format(new Date(notification.sentAt), ' dd MMMM à H:MM', {
            locale: fr,
          }),
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
        rowHeight={35}
      />
    );
  }
);
