import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { BsThermometerHalf } from 'react-icons/bs';

export const ThermometerIcon = memo((props: IconBaseProps) => (
  <BsThermometerHalf {...props} />
));
