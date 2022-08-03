import { createAsyncThunk } from '@reduxjs/toolkit';
import delay from 'delay';

export const logoutThunk = createAsyncThunk('user/logout', async () => {
  // TODO: appeler le service quand il sera ok
  await delay(500);
  return undefined;
});
