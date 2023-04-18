/* eslint-disable */
import { memo, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import { useEffectOnce } from 'react-use';

interface RedirectProps {
  to: string;
  // use react router or not for redirect
  router?: 'react' | 'server';
}

/**
 * Redirect doesn't exist on react router V6
 * This one use the hook useNavigate under the hood
 */
export const Redirect = memo((props: RedirectProps) => {
  const { to, router = 'react' } = props;
  const [hasBeenRedirect, setHasBeenRedirect] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffectOnce(() => {
    if (!hasBeenRedirect && pathname !== to) {
      router === 'react' && navigate(to);
      router === 'server' && window.location.assign(to);

      setHasBeenRedirect(true);
    }
  });

  return null;
});
