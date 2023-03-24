import axios from 'axios';

import type { InvitedUserStatus } from '../InvitedUserStatus';
import type { MeetingTypeEnum } from '../MeetingTypeEnum';
import { TeaOrCoffeeMeeting } from '../TeaOrCoffeeMeeting';

export interface TeaOrCoffeeMeetingPayload {
  invitedUsersIds: InvitedUserStatus['invitedUser']['id'][];
  meetingType: MeetingTypeEnum;
  date: string;
  name: string;
}

export interface createTeaOrCoffeeMeetingParams {
  token: string;
  payload: TeaOrCoffeeMeetingPayload;
}

export interface createTeaOrCoffeeMeetingResponse {
  message: string;
  teaOrCoffeeMeeting: TeaOrCoffeeMeeting;
}

export const createTeaOrCoffeeMeetingService = ({
  token,
  payload,
}: createTeaOrCoffeeMeetingParams) =>
  axios.post<createTeaOrCoffeeMeetingResponse>(
    'api/tea-or-coffee-meeting',
    { payload },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
