import React from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { ChangeNotificationPreferenceParams } from '@entities/settings/services/changeNotificationPreference.service';
import { selectNotificationPreferences } from '@entities/settings/store/selectors/getNotificationPreferences.selector';
import { changeNotificationPreferenceThunk } from '@entities/settings/store/thunks/ChangeNotificationPreference.thunk';
import {
  Card,
  CardContent,
  CardHeader,
  NotificationsIcon,
  Stack,
  Switch,
  Typography,
} from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

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

      const status = isMute ? 'muettes' : 'activées';

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
          enqueueSnackbar('Une erreur est survenue', {
            variant: 'error',
          });
        });
    };

  return (
    <div>
      {normalAlert && urgentAlert && importantAlert && (
        <Card>
          <CardHeader
            title={
              <Stack direction="row" alignItems="center" spacing={1}>
                <NotificationsIcon fontSize="large" />
                <Typography variant="h5">Notifications</Typography>
              </Stack>
            }
          />
          <CardContent>
            <Typography variant="body1">
              Rendre les notifications urgentes muettes ?
              {urgentAlert?.isMuted ? (
                <Switch
                  defaultChecked
                  onChange={handleChange('urgent')}
                  color="warning"
                />
              ) : (
                <Switch onChange={handleChange('urgent')} color="warning" />
              )}
            </Typography>
            <Typography variant="body1">
              Rendre les notifications importantes muettes ?
              {importantAlert?.isMuted ? (
                <Switch
                  defaultChecked
                  onChange={handleChange('important')}
                  color="warning"
                />
              ) : (
                <Switch onChange={handleChange('important')} color="warning" />
              )}
            </Typography>
            <Typography variant="body1">
              Rendre les notifications normales muettes ?
              {normalAlert?.isMuted ? (
                <Switch
                  defaultChecked
                  onChange={handleChange('normal')}
                  color="warning"
                />
              ) : (
                <Switch onChange={handleChange('normal')} color="warning" />
              )}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
