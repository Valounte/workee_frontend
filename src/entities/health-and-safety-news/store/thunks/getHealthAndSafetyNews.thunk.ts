import { createAsyncThunk } from '@reduxjs/toolkit';

import { HealthAndSafetyNews } from '@entities/health-and-safety-news/HealthAndSafetyNews';
import {
  getHealthAndSafetyNewsService,
  getHealthAndSafetyServiceParams,
} from '@entities/health-and-safety-news/service/getHealthAndSafetyNews.service';

export const getHealthAndSafetyNewsThunk = createAsyncThunk<
  HealthAndSafetyNews[],
  getHealthAndSafetyServiceParams
>('get/news', async builder => (await getHealthAndSafetyNewsService(builder)).data);
