import { useEffect, useMemo, useState } from 'react';

const isKeyboardEvent = (event: KeyboardEvent | Event): event is KeyboardEvent =>
  !!(event as KeyboardEvent).getModifierState;

/**
 * Return true if Caps Lock is on
 */
export const useIsCapsLockOn = () => {
  const [isCapsLockOn, setIsCapsLockOnActive] = useState(false);

  useEffect(() => {
    const onKeyup = (event: KeyboardEvent | Event) => {
      const isActive = isKeyboardEvent(event) && event.getModifierState('CapsLock');

      setIsCapsLockOnActive(isActive);
    };

    window.addEventListener('keyup', onKeyup);

    // Clean listener on unmount
    return () => {
      window.removeEventListener('keyup', onKeyup);
    };
  }, [setIsCapsLockOnActive, isCapsLockOn]);

  return useMemo(() => isCapsLockOn, [isCapsLockOn]);
};
