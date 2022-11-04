import axios from 'axios';

import { NotificationPreferences } from '../NotificationPreferences';

export interface getNotificationPreferencesParams {
  token: string;
}

export const getNotificationPreferencesService = ({
  token,
}: getNotificationPreferencesParams) =>
  axios.get<NotificationPreferences[]>('api/notification-preferences', {
    headers: {
      Authorization: `${token}`,
    },
  });
