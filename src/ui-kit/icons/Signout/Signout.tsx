import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdLogout } from 'react-icons/md';

export const SignoutIcon = memo((props: IconBaseProps) => <MdLogout {...props} />);
