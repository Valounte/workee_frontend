import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdEventNote } from 'react-icons/md';

export const CalendarIcon = memo((props: IconBaseProps) => (
  <MdEventNote {...props} />
));
