import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { AiOutlineSmile } from 'react-icons/ai';

export const SmileIcon = memo((props: IconBaseProps) => (
  <AiOutlineSmile {...props} />
));
