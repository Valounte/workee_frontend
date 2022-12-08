import { configureStore } from '@reduxjs/toolkit';

import { authentificationSlice } from '@entities/authentification/store/slice';
import { dailyFeedbackSlice } from '@entities/dailyFeedback/store/slice';
import { currentHumiditySlice } from '@entities/environment-metrics/humidity/current/store/slice';
import { humiditySlice } from '@entities/environment-metrics/humidity/store/slice';
import { currentLuminositySlice } from '@entities/environment-metrics/luminosity/current/store/slice';
import { luminositySlice } from '@entities/environment-metrics/luminosity/store/slice';
import { currentSoundSlice } from '@entities/environment-metrics/sound/current/store/slice';
import { soundSlice } from '@entities/environment-metrics/sound/store/slice';
import { currentTemperatureSlice } from '@entities/environment-metrics/temperature/current/store/slice';
import { temperatureSlice } from '@entities/environment-metrics/temperature/store/slice';
import { HealthAndSafetyNewsSlice } from '@entities/health-and-safety-news/store/slice';
import { jobSlice } from '@entities/jobs/store/slice';
import { notificationsSlice } from '@entities/notifications/store/slice';
import {
  environmentMetricsPreferencesSlice,
  notificationPreferencesSlice,
} from '@entities/settings/store/slice';
import { teamSlice } from '@entities/teams/store/slice';
import { teaOrCoffeeMeetingSlice } from '@entities/teaOrCoffeeMeetings/store/slice';
import { loadStateToken, LocalStorageKey } from '@helpers/localStorage';

import { usersSlice } from '../entities/users/store/slice';

export const store = configureStore({
  reducer: {
    [authentificationSlice.name]: authentificationSlice.reducer,
    [teamSlice.name]: teamSlice.reducer,
    [jobSlice.name]: jobSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [dailyFeedbackSlice.name]: dailyFeedbackSlice.reducer,
    [temperatureSlice.name]: temperatureSlice.reducer,
    [currentTemperatureSlice.name]: currentTemperatureSlice.reducer,
    [humiditySlice.name]: humiditySlice.reducer,
    [currentHumiditySlice.name]: currentHumiditySlice.reducer,
    [soundSlice.name]: soundSlice.reducer,
    [currentSoundSlice.name]: currentSoundSlice.reducer,
    [luminositySlice.name]: luminositySlice.reducer,
    [currentLuminositySlice.name]: currentLuminositySlice.reducer,
    [HealthAndSafetyNewsSlice.name]: HealthAndSafetyNewsSlice.reducer,
    [notificationPreferencesSlice.name]: notificationPreferencesSlice.reducer,
    [teaOrCoffeeMeetingSlice.name]: teaOrCoffeeMeetingSlice.reducer,
    [environmentMetricsPreferencesSlice.name]:
      environmentMetricsPreferencesSlice.reducer,
    [notificationsSlice.name]: notificationsSlice.reducer,
  },
  preloadedState: {
    authentification: {
      token: loadStateToken(LocalStorageKey.token),
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
