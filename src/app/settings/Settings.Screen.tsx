import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getEnvironmentMetricsPreferencesThunk } from '@entities/settings/store/thunks/getEnvironmentMetricsPreferences.thunk';
import { getNotificationsPreferencesThunk } from '@entities/settings/store/thunks/getNotificationsPreferences.thunk';
import { Typography, styled } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { EnvironmentMetricsPreferences } from './features/EnvironmentMetricsPreferences';
import { NotificationPreferences } from './features/NotificationPreferences';

const StyledTitleContainer = styled.div`
  margin-left: 29px;
  margin-top: 18px;
`;

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
    <StyledTitleContainer>
      <Typography variant="h4"> Paramètres </Typography>
      <NotificationPreferences />
      <EnvironmentMetricsPreferences />
    </StyledTitleContainer>
  );
};

export default SettingsScreen;
