import axios from 'axios';

import type { Notification } from '../Notification';

export interface getNotificationsServiceParams {
  token: string;
}

export const getNotificationsService = ({ token }: getNotificationsServiceParams) =>
  axios.get<Notification[]>('api/notifications', {
    headers: {
      Authorization: `${token}`,
    },
  });
