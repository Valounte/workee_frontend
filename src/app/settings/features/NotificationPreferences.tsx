import React from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { ChangeNotificationPreferenceParams } from '@entities/settings/services/changeNotificationPreference.service';
import { selectNotificationPreferences } from '@entities/settings/store/selectors/getNotificationPreferences.selector';
import { changeNotificationPreferenceThunk } from '@entities/settings/store/thunks/ChangeNotificationPreference.thunk';
import { styled, Switch, Typography } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

const StyledBoxContainer = styled.div`
  margin-top: 33px;
  width: 760px !important;
  height: 250px !important;
  border: 1px solid #d9d9d9;
  padding: 28px 28px 28px 28px;
  background-color: #ffffff;
`;

const StyledText = styled(Typography)`
  padding-bottom: 15px;
`;

const StyledTextContainer = styled.div`
  margin-top: 17px;
`;

export const NotificationPreferences = () => {
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const notificationPreferences = useSelector(selectNotificationPreferences);
  const importantAlert = notificationPreferences.find(
    notificationPreference => notificationPreference.alertLevel === 'IMPORTANT_ALERT'
  );
  const urgentAlert = notificationPreferences.find(
    notificationPreference => notificationPreference.alertLevel === 'URGENT_ALERT'
  );
  const normalAlert = notificationPreferences.find(
    notificationPreference => notificationPreference.alertLevel === 'NORMAL_ALERT'
  );

  const handleChange =
    (alertLevel: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const isMute = event.target.checked;
      const param: ChangeNotificationPreferenceParams = {
        token,
        alertLevel,
        isMute,
      };

      const status = isMute ? 'muettes' : 'activés';

      dispatch(changeNotificationPreferenceThunk(param))
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar(
            `Notifications de niveau d'alerte "${alertLevel}" sont désormais ${status}!`,
            {
              variant: 'success',
            }
          );
        })
        .catch(() => {
          enqueueSnackbar('Error !', {
            variant: 'error',
          });
        });
    };

  return (
    <div>
      {normalAlert && urgentAlert && importantAlert && (
        <StyledBoxContainer>
          <Typography variant="h5">Notifications</Typography>
          <StyledTextContainer>
            <StyledText variant="body1">
              Souhaitez-vous rendre les notifications urgentes muettes ?
              {urgentAlert?.isMuted ? (
                <Switch
                  defaultChecked
                  onChange={handleChange('urgent')}
                  color="warning"
                />
              ) : (
                <Switch onChange={handleChange('urgent')} color="warning" />
              )}
            </StyledText>
            <StyledText variant="body1">
              Souhaitez-vous rendre les notifications importantes muettes ?
              {importantAlert?.isMuted ? (
                <Switch
                  defaultChecked
                  onChange={handleChange('important')}
                  color="warning"
                />
              ) : (
                <Switch onChange={handleChange('important')} color="warning" />
              )}
            </StyledText>
            <StyledText variant="body1">
              Souhaitez-vous rendre les notifications normales muettes ?
              {normalAlert?.isMuted ? (
                <Switch
                  defaultChecked
                  onChange={handleChange('normal')}
                  color="warning"
                />
              ) : (
                <Switch onChange={handleChange('normal')} color="warning" />
              )}
            </StyledText>
          </StyledTextContainer>
        </StyledBoxContainer>
      )}
    </div>
  );
};
