import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { GiStairsGoal } from 'react-icons/gi';

export const TargetIcon = memo((props: IconBaseProps) => (
  <GiStairsGoal {...props} />
));
