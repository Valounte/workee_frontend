import { useCallback, useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

export const usePaginationSearchParams = () => {
  const [params, setParams] = useSearchParams();

  const page = parseInt(params.get('page') ?? '1', 10);
  const limit = parseInt(params.get('limit') ?? '50', 10);

  const setPage = useCallback(
    (newPage: number) =>
      setParams({ page: newPage.toString(), limit: limit.toString() }),
    [limit, setParams]
  );

  const setLimit = useCallback(
    (newLimit: number) =>
      setParams({ limit: newLimit.toString(), page: page.toString() }),
    [page, setParams]
  );

  return useMemo(
    () => ({ page, limit, setPage, setLimit }),
    [page, limit, setPage, setLimit]
  );
};
