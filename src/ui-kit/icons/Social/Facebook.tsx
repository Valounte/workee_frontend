import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { AiOutlineFacebook } from 'react-icons/ai';

export const FacebookIcon = memo((props: IconBaseProps) => (
  <AiOutlineFacebook {...props} />
));
