import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdOutlineWarning } from 'react-icons/md';

export const WarningIcon = memo((props: IconBaseProps) => (
  <MdOutlineWarning {...props} />
));
