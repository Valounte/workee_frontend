import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@entities/user/store/slice';

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
