import React from 'react';

import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { BiCheckCircle, BiHelpCircle, BiXCircle } from 'react-icons/bi';

import { InvitedUserStatus } from '@entities/teaOrCoffeeMeetings/InvitedUserStatus';
import { Stack, Typography } from '@ui-kit';

export const meetingParticipantDataGridCol: GridColDef = {
  field: 'participant',
  headerName: 'Participants',
  type: 'string',
  width: 300,

  renderCell: (params: GridRenderCellParams<InvitedUserStatus[], any, any>) => (
    <div>
      {params.value && (
        <Stack direction="column" spacing={1}>
          {params.value.map(p => (
            <Stack direction="row" spacing={1} key={p.invitedUser.id}>
              {p.invitationStatus === 'ACCEPTED' && (
                <BiCheckCircle fontSize="medium" />
              )}
              {p.invitationStatus === 'PENDING' && (
                <BiHelpCircle fontSize="medium" />
              )}
              {p.invitationStatus === 'DECLINED' && <BiXCircle fontSize="medium" />}

              <Typography>
                {p.invitedUser.firstname} {p.invitedUser.lastname}
              </Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </div>
  ),
};
