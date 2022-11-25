import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getEnvironmentMetricsPreferencesThunk } from '@entities/settings/store/thunks/getEnvironmentMetricsPreferences.thunk';
import { getNotificationsPreferencesThunk } from '@entities/settings/store/thunks/getNotificationsPreferences.thunk';
import { Typography, SettingsIcon, Box, Stack, Grid } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { EnvironmentMetricsPreferences } from './features/EnvironmentMetricsPreferences';
import { NotificationPreferences } from './features/NotificationPreferences';

const SettingsScreen = () => {
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotificationsPreferencesThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });

    dispatch(getEnvironmentMetricsPreferencesThunk({ token }))
      .then(() => unwrapResult)
      .catch(() => {
        console.log('error');
      });
  }, [dispatch, token]);

  return (
    <>
      <Box height="15vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <SettingsIcon fontSize="large" />
          <Typography variant="h4">Paramètres</Typography>
        </Stack>
        <Typography variant="body1">
          Configurez les préférences d&apos;utilisation de votre Workee ici
        </Typography>
      </Box>

      <Grid container spacing={2} columns={12} py={4} alignItems="stretch">
        <Grid item sm={6}>
          <NotificationPreferences />
        </Grid>
        <Grid item sm={6}>
          <EnvironmentMetricsPreferences />
        </Grid>
      </Grid>
    </>
  );
};

export default SettingsScreen;
