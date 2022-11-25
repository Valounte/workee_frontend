import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdNotifications } from 'react-icons/md';

export const NotificationsIcon = memo((props: IconBaseProps) => (
  <MdNotifications {...props} />
));
