import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { EnvironmentMetricsPreferences } from '@entities/settings/EnvironmentMetricsPreferences';

import { NotificationPreferences } from '../NotificationPreferences';
import { changeEnvironmentMetricsPreferenceThunk } from './thunks/ChangeEnvironmentMetricsPreference.thunk';
import { changeNotificationPreferenceThunk } from './thunks/ChangeNotificationPreference.thunk';
import { getEnvironmentMetricsPreferencesThunk } from './thunks/getEnvironmentMetricsPreferences.thunk';
import { getNotificationsPreferencesThunk } from './thunks/getNotificationsPreferences.thunk';

export const notificationPreferencesAdapter =
  createEntityAdapter<NotificationPreferences>({
    selectId: notificationPreferences => notificationPreferences.id,
  });

export const environmentMetricsPreferencesAdapter =
  createEntityAdapter<EnvironmentMetricsPreferences>({
    selectId: environmentMetricsPreferences => environmentMetricsPreferences.id,
  });

export const environmentMetricsPreferencesSlice = createSlice({
  name: 'environmentMetricsPreferences',
  initialState: environmentMetricsPreferencesAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getEnvironmentMetricsPreferencesThunk.fulfilled,
      (state, { payload }) => {
        environmentMetricsPreferencesAdapter.setAll(state, payload);
      }
    );
    builder.addCase(changeEnvironmentMetricsPreferenceThunk.fulfilled, () => {});
  },
});

export const notificationPreferencesSlice = createSlice({
  name: 'notificationPreferences',
  initialState: notificationPreferencesAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getNotificationsPreferencesThunk.fulfilled,
      (state, { payload }) => {
        notificationPreferencesAdapter.setAll(state, payload);
      }
    );
    builder.addCase(changeNotificationPreferenceThunk.fulfilled, () => {});
  },
});
