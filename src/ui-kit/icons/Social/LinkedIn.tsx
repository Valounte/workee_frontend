import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { AiOutlineLinkedin } from 'react-icons/ai';

export const LinkedInIcon = memo((props: IconBaseProps) => (
  <AiOutlineLinkedin {...props} />
));
