import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { IoIosSettings } from 'react-icons/io';

export const SettingsIcon = memo((props: IconBaseProps) => (
  <IoIosSettings {...props} />
));
