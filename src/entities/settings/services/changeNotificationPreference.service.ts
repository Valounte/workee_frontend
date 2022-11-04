import axios from 'axios';

export interface ChangeNotificationPreferenceParams {
  token: string;
  alertLevel: string;
  isMute: boolean;
}

export interface ChangeNotificationPreferenceReturn {
  message: string;
}

export const changeNotificationPreference = ({
  token,
  alertLevel,
  isMute,
}: ChangeNotificationPreferenceParams) =>
  axios.put<ChangeNotificationPreferenceReturn>(
    'api/notification-preference',
    { alertLevel, isMute },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
