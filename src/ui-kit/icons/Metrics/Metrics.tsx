import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { AiFillAlert } from 'react-icons/ai';

export const MetricsIcon = memo((props: IconBaseProps) => (
  <AiFillAlert {...props} />
));
