import { InvitedUser } from './InvitedUser';
import { InvitedUserStatus } from './InvitedUserStatus';
import { MeetingTypeEnum } from './MeetingTypeEnum';

export interface TeaOrCoffeeMeeting {
  id: number;
  initiator: InvitedUser;
  invitedUsersStatus: InvitedUserStatus[];
  meetingType: MeetingTypeEnum;
  date: string;
  name: string;
}
