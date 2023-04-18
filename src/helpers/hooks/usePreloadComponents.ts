import { useMemo, useState } from 'react';

import type { PreloadableComponent } from 'react-lazy-with-preload';
import { useEffectOnce } from 'react-use';

export const usePreloadComponents = (
  lazyComponents: Array<PreloadableComponent<() => JSX.Element>>
) => {
  const [areLoaded, setAreLoaded] = useState(false);

  const [hasError, setHasError] = useState(false);

  const loadLazyComponents = async () =>
    lazyComponents.map(lazyComponent => lazyComponent.preload());

  useEffectOnce(() => {
    loadLazyComponents()
      .then(() => setAreLoaded(true))
      .catch(() => setHasError(true));
  });

  return useMemo(
    () => ({
      areLoaded,
      hasError,
    }),
    [areLoaded, hasError]
  );
};
