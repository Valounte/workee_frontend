/* eslint-disable*/
import { useCallback, useMemo, useState } from 'react';

import { nanoid } from '@reduxjs/toolkit';
// @ts-ignore
import { makeBlob, mimicDownload } from '@samvera/image-downloader';

export const useForceDownload = (url?: string, title: string = nanoid(5)) => {
  const [hasError, setHasError] = useState(false);

  const forceDownload = useCallback(async () => {
    if (!url) {
      setHasError(true);
      return;
    }

    const response = await makeBlob(url).catch(() => setHasError(true));

    if (!response) {
      return;
    }
    mimicDownload(response, title);
  }, [url, title]);

  return useMemo(
    () => ({
      forceDownload,
      hasError,
    }),
    [forceDownload, hasError]
  );
};
