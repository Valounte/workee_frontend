import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdArrowDropDown } from 'react-icons/md';

export const ExpandMoreIcon = memo((props: IconBaseProps) => (
  <MdArrowDropDown {...props} />
));
