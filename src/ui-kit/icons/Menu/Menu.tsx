import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';

export const MenuIcon = memo((props: IconBaseProps) => (
  <GiHamburgerMenu {...props} />
));
