import React, { memo } from 'react';

import type { IconBaseProps } from 'react-icons';
import { MdWork } from 'react-icons/md';

export const WorkIcon = memo((props: IconBaseProps) => <MdWork {...props} />);
