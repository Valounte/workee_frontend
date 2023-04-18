import { useMemo } from 'react';

import { useMatch } from 'react-router';

export const useIsNavLinkActiveHook = <Pattern extends string>(pattern: Pattern) => {
  const isActive = Boolean(useMatch(pattern));

  return useMemo(() => isActive, [isActive]);
};
