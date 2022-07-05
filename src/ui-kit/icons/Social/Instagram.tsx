import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { AiOutlineInstagram } from 'react-icons/ai';

export const InstagramIcon = memo((props: IconBaseProps) => (
  <AiOutlineInstagram {...props} />
));
