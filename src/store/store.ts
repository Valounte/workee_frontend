import { configureStore } from '@reduxjs/toolkit';

import { jobSlice } from '@entities/jobs/store/slice';
import { teamSlice } from '@entities/teams/store/slice';
import { userSlice } from '@entities/user/store/slice';
import { loadStateToken, LocalStorageKey } from '@helpers/localStorage';

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [teamSlice.name]: teamSlice.reducer,
    [jobSlice.name]: jobSlice.reducer,
  },
  preloadedState: {
    user: {
      token: loadStateToken(LocalStorageKey.token),
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
