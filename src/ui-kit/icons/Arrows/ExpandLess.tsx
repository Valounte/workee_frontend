import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdArrowDropUp } from 'react-icons/md';

export const ExpandLessIcon = memo((props: IconBaseProps) => (
  <MdArrowDropUp {...props} />
));
