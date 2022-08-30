import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { HiUserGroup } from 'react-icons/hi';

export const TeamIcon = memo((props: IconBaseProps) => <HiUserGroup {...props} />);
