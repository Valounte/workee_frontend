import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';

export const DashboardIcon = memo((props: IconBaseProps) => <AiFillHome {...props} />);
