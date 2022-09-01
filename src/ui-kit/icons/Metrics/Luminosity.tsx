import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { BsFillBrightnessHighFill } from 'react-icons/bs';

export const LuminosityIcon = memo((props: IconBaseProps) => (
  <BsFillBrightnessHighFill {...props} />
));
