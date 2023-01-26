import React, { useEffect } from 'react';

// import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { Typography, SettingsIcon, Box, Stack, Grid } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { UserPersonnal } from './features/UserPersonnal';
// import { UserProfessional } from './features/UserProfessional';

const UserProfileScreen = () => {
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //   dispatch(getNotificationsPreferencesThunk({ token }))
    //     .then(() => unwrapResult)
    //     .catch(() => {
    //       console.log('error');
    //     });
    //   dispatch(getEnvironmentMetricsPreferencesThunk({ token }))
    //     .then(() => unwrapResult)
    //     .catch(() => {
    //       console.log('error');
    //     });
  }, [dispatch, token]);

  return (
    <>
      <Box height="8vh" p={2}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <SettingsIcon fontSize="large" />
          <Typography variant="h4">Profil utilisateur</Typography>
        </Stack>
        <Typography variant="body1">
          Configurez les préférences d&apos;utilisation de votre compte ici
        </Typography>
      </Box>
      <Box height="87vh" p={2}>
        <Grid container spacing={2} columns={12} py={4} alignItems="stretch">
          <Grid item sm={12}>
            <UserPersonnal />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserProfileScreen;
