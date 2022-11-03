import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { HiUserAdd } from 'react-icons/hi';

export const AddUserIcon = memo((props: IconBaseProps) => <HiUserAdd {...props} />);
