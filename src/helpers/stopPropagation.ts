import type { MouseEvent, SyntheticEvent } from 'react';

export const stopPropagation = (e: MouseEvent<HTMLElement> | SyntheticEvent) => {
  e.stopPropagation();
};
