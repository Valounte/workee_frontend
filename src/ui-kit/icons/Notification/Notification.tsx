import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { BsFillBellFill } from 'react-icons/bs';

export const NotificationIcon = memo((props: IconBaseProps) => <BsFillBellFill {...props} />);
