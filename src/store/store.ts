import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@entities/user/store/slice';
import { loadStateToken, LocalStorageKey } from '@helpers/localStorage';

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
  preloadedState: {
    user: {
      token: loadStateToken(LocalStorageKey.token),
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
