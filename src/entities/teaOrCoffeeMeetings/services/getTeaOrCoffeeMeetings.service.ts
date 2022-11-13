import axios from 'axios';

import { InvitationStatusEnum } from '../InvitationStatusEnum';
import { TeaOrCoffeeMeeting } from '../TeaOrCoffeeMeeting';

export interface getTeaOrCoffeeMeetingParams {
  token: string;
  invitationStatus: InvitationStatusEnum;
}

export const getTeaOrCoffeeMeetingService = ({
  token,
  invitationStatus,
}: getTeaOrCoffeeMeetingParams) =>
  axios.get<TeaOrCoffeeMeeting[]>('api/tea-or-coffee-meeting', {
    params: {
      invitationStatus: `${invitationStatus}`,
    },
    headers: {
      Authorization: `${token}`,
    },
  });
