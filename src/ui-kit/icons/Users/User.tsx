import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { HiUserCircle } from 'react-icons/hi';

export const UserIcon = memo((props: IconBaseProps) => <HiUserCircle {...props} />);
