import { InvitationStatusEnum } from './InvitationStatusEnum';
import { InvitedUser } from './InvitedUser';

export interface InvitedUserStatus {
  invitedUser: InvitedUser;
  invitationStatus: InvitationStatusEnum;
}
