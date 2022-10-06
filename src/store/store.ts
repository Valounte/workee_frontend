import { configureStore } from '@reduxjs/toolkit';

import { authentificationSlice } from '@entities/authentification/store/slice';
import { dailyFeedbackSlice } from '@entities/dailyFeedback/store/slice';
import { jobSlice } from '@entities/jobs/store/slice';
import { teamSlice } from '@entities/teams/store/slice';
import { loadStateToken, LocalStorageKey } from '@helpers/localStorage';

import { usersSlice } from '../entities/users/store/slice';

export const store = configureStore({
  reducer: {
    [authentificationSlice.name]: authentificationSlice.reducer,
    [teamSlice.name]: teamSlice.reducer,
    [jobSlice.name]: jobSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [dailyFeedbackSlice.name]: dailyFeedbackSlice.reducer,
  },
  preloadedState: {
    authentification: {
      token: loadStateToken(LocalStorageKey.token),
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
