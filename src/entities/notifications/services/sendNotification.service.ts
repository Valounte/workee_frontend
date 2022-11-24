import axios from 'axios';

export type NotifSendBody = {
  teamsId: string[];
  usersId: string[];
  alertLevel: string;
  message: string;
  token: string;
};

export interface NotifSendResponse {
  message: string;
}

export const sendNotificationService = (params: NotifSendBody) =>
  axios.post<NotifSendResponse>(
    '/api/send-notification',
    {
      teamsId: params.teamsId,
      usersId: params.usersId,
      alertLevel: params.alertLevel,
      message: params.message,
    },
    {
      headers: {
        Authorization: ` ${params.token}`,
      },
    }
  );
