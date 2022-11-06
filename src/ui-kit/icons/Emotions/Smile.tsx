import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { RiEmotionHappyFill } from 'react-icons/ri';

export const SmileIcon = memo((props: IconBaseProps) => (
  <RiEmotionHappyFill {...props} />
));
